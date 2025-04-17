document.getElementById("chatbot-send").addEventListener("click", async function () {
    const inputField = document.getElementById("chatbot-input");
    const message = inputField.value.trim();
    const chatBody = document.getElementById("chatbot-body");

    if (message) {

        chatBody.innerHTML += `<div><strong>You:</strong> ${message}</div>`;
        inputField.value = "";

        try {
            const response = await fetch("https://api.openai.com/v1/chat/completions", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer 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", // Replace with your OpenAI API key
                },
                body: JSON.stringify({
                    model: "gpt-4",
                    messages: [{ role: "user", content: message }],
                }),
            });

            const data = await response.json();
            const reply = data.choices[0].message.content;

            chatBody.innerHTML += `<div><strong>AI:</strong> ${reply}</div>`;
            chatBody.scrollTop = chatBody.scrollHeight;
        } catch (error) {
            chatBody.innerHTML += `<div><strong>AI:</strong> Hello! How can I help you today?</div>`;
        }
    }
});










