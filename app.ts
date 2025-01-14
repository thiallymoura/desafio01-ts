import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { SpecialAccount } from './class/SpecialAccount';

// const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
// peopleAccount.deposit(100);
// peopleAccount.withdraw(50);
// peopleAccount.withdraw(100);

// const companyAccount: CompanyAccount = new CompanyAccount('DIO', 1001)
// // companyAccount.deposit(500); 
// // companyAccount.withdraw(200); 

// // Testando o empréstimo
// companyAccount.getLoan(1000); // Empréstimo válido
// companyAccount.getBalance(); // Mostra o saldo atualizado

// // Testando com conta inativa
// companyAccount['status'] = false; // Alterando o status para falso
// companyAccount.getLoan(500); // Empréstimo não permitido

// Criando uma conta especial
const specialAccount = new SpecialAccount('Lucas', 1002);

// Realizando um depósito de 100
specialAccount.deposit(100); // Será depositado 110

// Verificando o saldo
specialAccount.getBalance(); // Mostra o saldo atualizado











// const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
// console.log(peopleAccount)
// peopleAccount.deposit()
// const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
// companyAccount.deposit()
// console.log(companyAccount)