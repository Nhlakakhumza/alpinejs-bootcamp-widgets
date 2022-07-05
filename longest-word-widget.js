document.addEventListener('alpine:init', () => {
    Alpine.data('longestWordWidget', function () {

        return {
            str: '',
            message: '',
            showLongestword: false,
            myLongestName() {  

                const mylongestWordMessage = longestWord(this.str);
                console.log(mylongestWordMessage);
                this.message = mylongestWordMessage;
                
                setTimeout(() => {
                    this.message = '';
                }, 3000);
            }
        }
    });

})

