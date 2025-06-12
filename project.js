document.addEventListener("DOMContentLoaded", function () {

 
  const checkBox = document.getElementById("check");
  const navLinks = document.querySelectorAll("nav ul li a");

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      if (checkBox.checked) {
        checkBox.checked = false;
      }
    });
  });

  const categoryItems = document.querySelectorAll(".category li");
  const menuItems = document.querySelectorAll(".menu-item");

  categoryItems.forEach(category => {
    category.addEventListener("click", () => {
      
    categoryItems.forEach(item => item.classList.remove("active"));
      category.classList.add("active");

      const selected = category.innerText;

      menuItems.forEach(item => {
        const title = item.querySelector(".title").innerText;

        if (selected === "All" || title.includes(selected)) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });

  
  const enrollButtons = document.querySelectorAll(".btn-menu");

  enrollButtons.forEach(button => {
    button.addEventListener("click", () => {
      alert("Thank you for enrolling! \nOur team will contact you soon.");
    });
  });

 
  const scrollButton = document.createElement("button");
  scrollButton.innerText = "Back to  Top";
  scrollButton.style.position = "fixed";
  scrollButton.style.bottom = "100px";
  scrollButton.style.right = "50px";
  scrollButton.style.padding = "10px 15px";
  scrollButton.style.fontSize = "20px";
  scrollButton.style.border = "none";
  scrollButton.style.borderRadius = "5px";
  scrollButton.style.background = "#000";
  scrollButton.style.color = "#fff";
  scrollButton.style.cursor = "pointer";
  scrollButton.style.display = "none";
  document.body.appendChild(scrollButton);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollButton.style.display = "block";
    } else {
      scrollButton.style.display = "none";
    }
  });

  scrollButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

});
