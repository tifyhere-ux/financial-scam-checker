# financial-scam-checker
# Financial Phishing & Scam Risk Checker

A simple web app that helps users check financial messages and payment websites for possible phishing or scam risks.

This project focuses on **basic awareness**, not advanced security or AI detection.

---

## What This Does
- Checks suspicious financial messages or UPI-related texts  
- Detects fake or look-alike payment websites  
- Shows **Low / Medium / High Risk** with a short explanation  

---

## How It Works
The logic is rule-based:
- Looks for common scam words like OTP, urgent, verify, etc.
- Checks URLs against known payment domains
- Flags look-alike website patterns

---

## Built With
- HTML  
- CSS  
- JavaScript  
- GitHub  

---

## How to Run
1. Download or clone the repository  
2. Open `index.html` in a browser  
3. Enter a message or website URL  
4. Click **Check Scam Risk**

No setup needed.

---

## Example
**Input:**  
`Your account is blocked. Verify OTP now`

**Output:**  
`HIGH RISK – Possible financial scam message`

---

## Note
This is an educational project built for a hackathon and is meant for awareness only.
