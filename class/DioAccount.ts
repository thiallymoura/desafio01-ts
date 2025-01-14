export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this.name
  }

  deposit = (value: number): void => {
    if(this.validateStatus()){
      if(value > 0){
        this.balance += value
        console.log(`Você depositou R$${value}, seu saldo atual é R$${this.balance}`)
      } else {
        console.log('O valor precisa ser maior que zero')
      }
    }
  }

  withdraw = (value: number): void => {
    if(this.validateStatus()){
      if(value > 0){
        if(this.balance >= value){
          this.balance -= value
          console.log(`Voce sacou R$${value}, seu saldo atual é R$${this.balance}`);
        } else {
        console.log('Saldo insuficiente para realizar o saque.');
        } 
      } else {
        console.log('O valor do saque deve ser maior que zero');
      }
    }
  }

  getBalance = (): void => {
    console.log(`Saldo atual: R$${this.balance}`);
  }

  // Método público que reutiliza o método privado
  public isAccountValid = (): boolean => {
    return this.validateStatus();
  };

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
