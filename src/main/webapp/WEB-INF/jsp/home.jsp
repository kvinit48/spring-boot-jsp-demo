<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="jakarta.tags.core" %>
<%@ taglib prefix="fmt" uri="jakarta.tags.fmt" %>
<html>
<head>
    <title>Spring Boot JSP Demo</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0;
        }
        .container {
            background: white;
            padding: 40px;
            border-radius: 10px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
            text-align: center;
            max-width: 500px;
        }
        h1 {
            color: #333;
            margin-bottom: 20px;
        }
        .message {
            color: #667eea;
            font-size: 1.2em;
            margin: 20px 0;
            padding: 15px;
            background: #f7f7f7;
            border-radius: 5px;
        }
        .timestamp {
            color: #666;
            font-size: 0.9em;
            margin-top: 30px;
        }
        .info {
            margin-top: 20px;
            color: #555;
            font-size: 0.9em;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🚀 Spring Boot JSP Application</h1>
        <div class="message">${message}</div>
        <div class="timestamp">
            Server Time: ${timestamp}
        </div>
        <div class="info">
            <p>This is a simple Spring Boot application with JSP view.</p>
            <p>Running on port 8080</p>
        </div>
    </div>
</body>
</html>