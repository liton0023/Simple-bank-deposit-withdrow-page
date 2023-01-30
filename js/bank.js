document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositFiled=document.getElementById('deposit-field');
    const newDepositAmountString=depositFiled.value;
    const newDepositAmount=parseFloat(newDepositAmountString);
    console.log(newDepositAmount);


    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    console.log(previousDepositTotal);

    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    // set the deposit total
    depositTotalElement.innerText = currentDepositTotal;


    const balanceTotalElement=document.getElementById('balance-total');
    const previousBalanceTotalString=balanceTotalElement.innerText;
    const previousBalanceTotal=parseFloat(previousBalanceTotalString);

    const currentBalanceTotal=previousBalanceTotal + newDepositAmount;
    balanceTotalElement.innerText=currentBalanceTotal;

    depositFiled.value= "";
})