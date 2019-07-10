class NegociacaoController{

    private _inputData: HTMLInputElement
    private _inputQuantidate: HTMLInputElement
    private _inputValor: HTMLInputElement

    constructor() {
        this._inputData = <HTMLInputElement>document.querySelector('#data');
        this._inputQuantidate = <HTMLInputElement>document.querySelector('#quantidade')
        this._inputValor = <HTMLInputElement>document.querySelector('#valor')
    }

    adiciona(event: Event){
        event.preventDefault();
        
        const negociacao = new Negociacao( 
            new Date(this._inputData.value.replace(/-/g, ',')),
            parseInt(this._inputQuantidate.value),
            parseFloat(this._inputValor.value)
        );
        
        console.log(negociacao)
            
    }
}