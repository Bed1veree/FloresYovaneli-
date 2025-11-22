onload = () =>{
    document.body.classList.remove("container");
    
    // Mensajes aleatorios
    const messages = [
        "No sé si lo notas, pero haces mis días mejores sin siquiera intentarlo. Te quiero mucho, mi niña bonita.♡",
        "Solo quería decirte que me encanta hablar contigo. Tienes algo que hace que todo se sienta más tranquilo y bonito. Ojalá siempre sigas brillando así, mi niña de ojitos lindos.♡",
        "No sé por qué, pero cada vez que hablo contigo termino con una sonrisa. Tienes una vibra tan bonita que es imposible no sentir cariño por ti.♡",
        "Solo quería recordarte que aquí estoy para ti, siempre que lo necesites. Me importa lo que sientes y me importa que estés bien.♡",
        "Ojalá algún día veas en ti todo lo que yo veo: una persona linda y con un corazón precioso.♡",
        "Solo quería decirte que ojalá hoy te vaya bonito, que no te falte una sonrisa y que todo te salga bien. Te lo mereces.♡",
        "Te quiero mucho.♡"
    ];
    
    const showMessageBtn = document.getElementById('showMessageBtn');
    const messageContainer = document.getElementById('messageContainer');
    const messageText = document.getElementById('messageText');
    let isMessageVisible = false;
    
    if (showMessageBtn && messageContainer && messageText) {
        showMessageBtn.addEventListener('click', function() {
            if (!isMessageVisible) {
                // Seleccionar un mensaje aleatorio
                const randomIndex = Math.floor(Math.random() * messages.length);
                messageText.textContent = messages[randomIndex];
                
                // Mostrar el mensaje
                messageContainer.style.opacity = '1';
                messageContainer.style.pointerEvents = 'auto';
                isMessageVisible = true;
                
                // Cambiar texto del botón
                this.textContent = '✕ Cerrar';
            } else {
                // Ocultar el mensaje
                messageContainer.style.opacity = '0';
                messageContainer.style.pointerEvents = 'none';
                isMessageVisible = false;
                
                // Restaurar texto del botón
                this.textContent = 'Mensajito♡';
            }
        });
        
        // Cerrar mensaje al hacer clic en el contenedor
        messageContainer.addEventListener('click', function() {
            this.style.opacity = '0';
            this.style.pointerEvents = 'none';
            isMessageVisible = false;
            showMessageBtn.textContent = 'Mensajito♡';
        });
        
        // Efecto hover para el botón
        showMessageBtn.addEventListener('mouseenter', function() {
            this.style.background = 'rgba(255, 255, 255, 0.15)';
            this.style.borderColor = 'rgba(255, 255, 255, 0.3)';
            this.style.color = 'rgba(255, 255, 255, 1)';
        });
        
        showMessageBtn.addEventListener('mouseleave', function() {
            this.style.background = 'rgba(255, 255, 255, 0.1)';
            this.style.borderColor = 'rgba(255, 255, 255, 0.2)';
            this.style.color = 'rgba(255, 255, 255, 0.8)';
        });
    }
};
