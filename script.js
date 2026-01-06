function checkRisk() {
  var message = document.getElementById("messageInput").value.trim();
  var url = document.getElementById("urlInput").value.trim();
  var result = document.getElementById("result");

  // reset result box
  result.innerText = "";
  result.style.color = "#000";
  result.style.background = "#ffffff";
  result.style.textAlign = "center";

  if (message === "" && url === "") {
    result.innerText = "Please enter a message or a website URL.";
    result.style.background = "#fff4e5";
    return;
  }

  /* ================= MESSAGE / UPI CHECK ================= */

  if (message !== "") {
    var text = message.toLowerCase();

    // HIGH RISK MESSAGE EXAMPLES
    if (
      text.includes("otp") ||
      text.includes("urgent") ||
      text.includes("account blocked") ||
      text.includes("verify now") ||
      text.includes("click here") ||
      text.includes("refund pending") ||
      text.includes("kyc update") ||
      text.includes("suspended") ||
      text.includes("free cashback") ||
      text.includes("limited time")
    ) {
      result.innerText =
        "HIGH RISK ⚠️\n\nThis message matches common financial scam patterns.\nDo NOT share OTP, PIN, or click unknown links.";
      result.style.color = "#b71c1c";
      result.style.background = "#ffecec";
      return;
    }

    // MEDIUM RISK MESSAGE EXAMPLES
    if (
      text.includes("payment") ||
      text.includes("transaction") ||
      text.includes("bank") ||
      text.includes("upi") ||
      text.includes("wallet") ||
      text.includes("debit") ||
      text.includes("credit")
    ) {
      result.innerText =
        "MEDIUM RISK ⚠️\n\nThis message is related to a financial transaction.\nVerify the sender before taking any action.";
      result.style.color = "#e65100";
      result.style.background = "#fff4e5";
      return;
    }

    // LOW RISK NORMAL MESSAGE
    if (text.length > 5) {
      result.innerText =
        "LOW RISK ✅\n\nNo obvious scam indicators found in this message.";
      result.style.color = "#1b5e20";
      result.style.background = "#e8f5e9";
      return;
    }
  }

  /* ================= URL CHECK ================= */

  if (url !== "") {
    var cleanUrl = url.toLowerCase();
    cleanUrl = cleanUrl.replace("https://", "");
    cleanUrl = cleanUrl.replace("http://", "");
    cleanUrl = cleanUrl.replace("www.", "");

    // TRUSTED FINANCIAL DOMAINS
    var trustedDomains = [
      "paypal.com",
      "paytm.com",
      "phonepe.com",
      "googlepay.com",
      "razorpay.com",
      "stripe.com"
    ];

    // LOW RISK URL EXAMPLES
    for (var i = 0; i < trustedDomains.length; i++) {
      if (cleanUrl.startsWith(trustedDomains[i])) {
        result.innerText =
          "LOW RISK ✅\n\nThis appears to be a genuine financial website.";
        result.style.color = "#1b5e20";
        result.style.background = "#e8f5e9";
        return;
      }
    }

    // HIGH RISK LOOK-ALIKE & SUSPICIOUS URL EXAMPLES
    if (
      cleanUrl.includes("paypaI") ||          // capital I trick
      cleanUrl.includes("paytm-secure") ||
      cleanUrl.includes("secure-pay") ||
      cleanUrl.includes("login-") ||
      cleanUrl.includes("verify-") ||
      cleanUrl.includes("free-cashback") ||
      cleanUrl.endsWith(".tk") ||
      cleanUrl.endsWith(".ru")
    ) {
      result.innerText =
        "HIGH RISK ⚠️\n\nThis URL looks suspicious or imitates a financial website.\nIt may be a phishing link.";
      result.style.color = "#b71c1c";
      result.style.background = "#ffecec";
      return;
    }

    // DEFAULT URL CASE
    result.innerText =
      "MEDIUM RISK ⚠️\n\nUnable to clearly verify this website.\nProceed with caution.";
    result.style.color = "#e65100";
    result.style.background = "#fff4e5";
    return;
  }

  /* ================= FALLBACK ================= */

  result.innerText =
    "MEDIUM RISK ⚠️\n\nUnable to determine safety clearly.";
  result.style.color = "#e65100";
  result.style.background = "#fff4e5";
}
