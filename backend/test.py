import os
from dotenv import load_dotenv
load_dotenv()
print(os.getenv("MISTRAL_API_KEY"))