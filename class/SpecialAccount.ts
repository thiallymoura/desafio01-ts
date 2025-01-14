import { DioAccount } from "./DioAccount"

export class SpecialAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  // Sobrescrevendo o método deposit para adicionar 10 ao valor informado
  deposit = (value: number): void => {
    const totalDeposit = value + 10; // Adiciona 10 ao valor do depósito
    if (this.isAccountValid()) {
      this.balance += totalDeposit;
      console.log(
        `Você depositou R$${value}. Mas com o bônus, o depósito total foi de R$${totalDeposit}. Saldo atual: R$${this.balance}`
      );
    }
  };
}