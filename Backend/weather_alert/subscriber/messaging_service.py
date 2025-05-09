import requests
import json
from abc import ABC, abstractmethod

class MessagingService():
    @abstractmethod
    def send_sms(self, phone_number, message):
        raise TypeError("Subclasses must impliment send_sms method.")
    
class MockMessagingService(MessagingService):
    def __init__(self, *args, **kwargs):
        self.sent_messages = {}

    def send_sms(self, phone_number, message):
        fake_sms = {
            "phone": phone_number,
            "message": message
        }
        self.sent_messages[phone_number] = message
        print(f"📩 Mock Sent: {fake_sms}")
        return fake_sms
    

class LoopMessagingService(MessagingService):
    def __init__(self, api_url, authorization_token, secret_key):
        self.api_url = api_url
        self.authorization_token = authorization_token
        self.secret_key = secret_key

    def send_sms(self, phone_number, message):
        payload = json.dumps({
            "text": message,
            "recipient": phone_number
        })
        headers = {
            'Authorization': self.authorization_token,
            'Loop-Secret-Key': self.secret_key,
            'Content-Type': 'application/json'  # (Safe to add)
        }

        response = requests.post(self.api_url, headers=headers, data=payload)

        # Optionally check success
        if response.status_code == 200:
            return response.json()
        else:
            # You might want to log errors or retry here
            return {
                "error": response.status_code,
                "message": response.text
            }