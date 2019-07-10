class NegociacaoController {
    constructor() {
        this._inputData = document.querySelector('#data');
        this._inputQuantidate = document.querySelector('#quantidade');
        this._inputValor = document.querySelector('#valor');
    }
    adiciona(event) {
        event.preventDefault();
        const negociacao = new Negociacao(this._inputData.value, this._inputQuantidate.value, this._inputValor.value);
        console.log(negociacao);
    }
}
