function criaCalculadora() {
  return {
    display: document.querySelector('.display'),

    inicia() {
      alert('Oi, iniciei!')
      this.cliqueBotoes()
      this.pressionaEnter()
    },

    pressionaEnter() {
      this.display.addEventListener('keyup', e => {
        if (e.keyCode === 13) {
          this.realizaConta()
        }
      })
    },

    realizaConta() {
      let conta = this.display.value

      try {
        conta = eval(conta)

        if (!conta) {
          alert('Conta inválida')
          return
        }

        this.display.value = String(conta)
      } catch (e) {
        alert('Conta inválida')
        return
      }
    },

    cliqueBotoes() {
      document.addEventListener('click', e => {
        const el = e.target

        if (el.classList.contains('btn-num')) {
          this.btnParaDisplay(el.innerText)
        }
        if (el.classList.contains('btn-clear')) {
          this.clearDisplay()
        }
        if (el.classList.contains('btn-del')) {
          this.apagarUm()
        }

        if (el.classList.contains('btn-eq')) {
          this.realizaConta()
        }
      })
    },

    apagarUm() {
      this.display.value = this.display.value.slice(0, -1)
    },

    clearDisplay() {
      this.display.value = ''
    },

    btnParaDisplay(valor) {
      this.display.value += valor
    }
  }
}

const calculadora = criaCalculadora()
calculadora.inicia()
