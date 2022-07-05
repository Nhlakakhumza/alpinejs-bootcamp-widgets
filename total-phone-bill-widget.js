document.addEventListener('alpine:init', () => {
    Alpine.data('totalPhoneBillWidget', function(){
        
        return {
            phoneBill : '',
            availableAmount: '0.00',
            airtimeMessage : '',
            calculate(){
                const message = totalPhoneBill(this.phoneBill);
                this.airtimeMessage = message;
    
            }
        }
    });
    
})