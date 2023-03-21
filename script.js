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
            var params = {
              name: document.getElementById("name").value,
              email: document.getElementById("email").value,
              message: document.getElementById("message").value,
            };
          
            const serviceID = "service_lw6v8sc";
            const templateID = "template_rwfe3vt";
          
              emailjs.send(serviceID, templateID, params)
              .then(res=>{
                  document.getElementById("name").value = "";
                  document.getElementById("email").value = "";
                  document.getElementById("message").value = "";
                  console.log(res);
                  alert("Email send")          
              })
              .catch(err=>console.log(err));
          
          }
          
          