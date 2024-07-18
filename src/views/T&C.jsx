import React from 'react';

export default function TandC({ termsAccepted, setTermsAccepted }) {

    const handleCheckboxChange = () => {
        setTermsAccepted(!termsAccepted);
    };
    return (
        <div>
            <div className='mx-auto flex max-w-7xl items-center justify-center p-6 lg:px-8'>
                <div className="flex">
                    <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">Você está comprando USDT usando SmartPay</h3>
                    <img className="h-8 w-auto rounded" src="https://smartpay.com.vc/wp-content/uploads/2023/05/smp-logo-full.png" alt="Default logo" />
                </div>
            </div>
            <ul className="text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                    <div className="flex items-center ps-3">
                        <p className="mb-3 text-gray-500 dark:text-gray-400">Tenho ciência que a SmartPay Serviços Digitais Ltda - CNPJ: 32.546.471/0001-96 é uma
                            empresa registrada no Brasil, e que atende a todas as regras do Banco Central e Receita
                            Federal, onde todas as operações de compra ou venda de USD₮ realizadas são acompanhadas
                            de Nota Fiscal e reportadas para Receita Federal do Brasil, como determina a Instrução
                            Normativa 1888/19.</p>
                    </div>
                </li>
                <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                    <div className="flex items-center ps-3">

                        <p className="mb-3 text-gray-500 dark:text-gray-400">Tenho ciência que a SmartPay Serviços Digitais Ltda não oferece nenhum serviço ou
                            produto de investimento e que a atividade se restringe à compra ou venda de USD₮.</p>
                    </div>
                </li>
                <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                    <div className="flex items-center ps-3">

                        <p className="mb-3 text-gray-500 dark:text-gray-400">Concordo em compartilhar os meus dados pessoais com a SmartPay Serviços Digitais Ltda
                            para que esta possa executar o serviço de compra ou venda de USD₮</p>
                    </div>
                </li>
                <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                    <div className="flex items-center ps-3">

                        <p className="mb-3 text-gray-500 dark:text-gray-400">Isento a SmartPay Serviços Digitais Ltda de qualquer responsabilidade comercial sobre
                            produto ou serviços ofertados por este site e ou empresa titular do endereço de USD₮</p>
                    </div>
                </li>
                <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                    <div className="flex items-center ps-3">

                        <p className="mb-3 text-gray-500 dark:text-gray-400">Concordo que ao fazer o pagamento do QRCODE de Pix gerado estarei concordando com os
                            termos de compra ou venda de USD₮ da SmartPay Serviços Digitais Ltda e que a operação
                            será registrada na Blockchain da Polygon enviando o ID de operação do Banco Central do Brasil
                            (End-To-End)</p>
                    </div>
                </li>
            </ul>
            <div className="flex items-center">
                <input id="terms" type="checkbox" checked={termsAccepted}
                    onChange={handleCheckboxChange} value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor="terms" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the terms and conditions.</label>
            </div>
        </div>
    )
}
