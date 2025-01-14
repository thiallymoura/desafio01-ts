import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (value : number): void => {
    if (this.isAccountValid()) {
      if (value > 0) {
        this.balance += value;
        console.log(
          `Você pegou um empréstimo de R$${value}. Saldo atual: R$${this.balance}`
        );
      } else {
        console.log('O valor do empréstimo deve ser maior que zero.');
      }
    }
  }
};