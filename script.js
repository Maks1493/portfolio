var textWrapper = document.querySelector('.ml12');
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

        anime.timeline({loop: true})
        .add({
            targets: '.ml12 .letter',
            translateX: [40,0],
            translateZ: 0,
            opacity: [0,1],
            easing: "easeOutExpo",
            duration: 1200,
            delay: (el, i) => 500 + 30 * i
        }).add({
            targets: '.ml12 .letter',
            translateX: [0,-30],
            opacity: [1,0],
            easing: "easeInExpo",
            duration: 1100,
            delay: (el, i) => 100 + 30 * i
        });

        var textWrapper = document.querySelector('.ml13');
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

        anime.timeline({loop: true})
        .add({
            targets: '.ml13 .letter',
            translateX: [40,0],
            translateZ: 0,
            opacity: [0,1],
            easing: "easeOutExpo",
            duration: 1200,
            delay: (el, i) => 500 + 30 * i
        }).add({
            targets: '.ml13 .letter',
            translateX: [0,-30],
            opacity: [1,0],
            easing: "easeInExpo",
            duration: 1100,
            delay: (el, i) => 100 + 30 * i
        });

        function sendMail() {
          var name = document.getElementById("name").value;
          var email = document.getElementById("email").value;
          var message = document.getElementById("message").value;
        
          if (name !== "" && email !== "" && message !== "") {
            const serviceID = "service_lw6v8sc";
            const templateID = "template_rwfe3vt";
            const params = { name, email, message };
            
            emailjs.send(serviceID, templateID, params)
              .then(res => {
                document.getElementById("name").value = "";
                document.getElementById("email").value = "";
                document.getElementById("message").value = "";
                console.log(res);     
                window.location.href = "contact_alert.html";       
              })
              .catch(err => console.log(err));
          } else {
            alert('Please fill out all the fields before sending the message');
          }
        }

        AOS.init({
          duration: 1200,
        })
        
      
        
