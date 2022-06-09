export class notas {
    constructor(
        private _notabimestre1: number,
        private _notabimestre2: number,
        private _soma: number
    ) { }

   
   
    public get notabimestre1(): number {
        return this._notabimestre1;
    }

    public set notabimestre1(notabimestre1: number) {
        this._notabimestre1 = notabimestre1;
    }

    public get notabimestre2(): number {
        return this._notabimestre2;
    }

    public set notabimestre2(notabimestre2: number) {
        this._notabimestre2 = notabimestre2;
    }
    
    public get soma(): number {
        return this._soma;
    }

    public set soma(soma: number) {
        this._soma = soma
    }
    
    resultado(v: number, v2: number): void {
        this.notabimestre1 = v;
        this.notabimestre2 = v2;
    }

    
    media(): void {
      this.soma = (this.notabimestre1 + this.notabimestre2) / 2;
      console.log('a nota da somas do bimestre é: ' + this.soma)
            if (this.soma <= 59.9){ 
        console.log('O aluno está reprovado!');
         
         } 
        else {
            console.log('O aluno está aprovado!');
             }
    }

    
}
