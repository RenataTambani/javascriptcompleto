function initTabNav() {
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabContent = document.querySelectorAll(".js-tabcontent section");

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add("ativo");
    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove("ativo");
      });
      tabContent[index].classList.add("ativo");
    }

    tabMenu.forEach((imgMenu, index) => {
      imgMenu.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}

initTabNav();
// ACCORDION LIST: lista com texto escondido. Clicar para mostrar a pergunta (selecionar as perguntas, adicionar uma classe ativo ao click, sem precisar fechar cada pergunta ao abrir a proxima)
function initAccordion() {
  const accordionList = document.querySelectorAll(".js-accordion dt");
  if (accordionList.length) {
    accordionList[0].classList.add("ativo");
    accordionList[0].nextElementSibling.classList.add("ativo");

    function activeAccordion(event) {
      this.classList.toggle("ativo");
      console.log(
        event.currentTarget.nextElementSibling.classList.toggle("ativo")
      );
    }

    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}
