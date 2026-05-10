# 🔐 Security Policy – DSA Visualizer

## Supported Versions

This project is currently under active development.

| Version | Supported |
|--------|----------|
| latest | ✅ Yes |

---

## 🚨 Reporting a Vulnerability

If you discover a security issue, please do NOT open a public issue.

Instead:
- Contact the maintainer privately
- Describe the vulnerability clearly
- Provide steps to reproduce it if possible

---

## 🛡️ Security Practices Used

This project follows basic secure development practices:

### Backend (FastAPI)
- CORS is restricted during production builds
- No sensitive data storage
- API only processes algorithm inputs (arrays)

### Frontend (React)
- No direct execution of backend code
- API requests validated before processing

---

## ⚠️ Notes

- This project is educational and does not handle sensitive user data
- No authentication system is currently implemented
- Intended for learning full-stack + DSA visualization concepts

---

## 🔒 Future Improvements

- Add API rate limiting
- Add input validation schema (Pydantic strict models)
- Add authentication layer (optional for SaaS version)
- Deploy with HTTPS (TLS enabled)