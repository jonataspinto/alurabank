class Negociacoes {
    constructor() {
        this._negociacoes = [];
    }
    adciona(negociacao) {
        this._negociacoes.push(negociacao);
    }
    paraArray() {
        return [].concat(this._negociacoes);
    }
}
