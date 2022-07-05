document.addEventListener('alpine:init', () => {
    Alpine.data('shortestWordWidget', function(){
        
        return {
            str : '',
            message : '',
            showShortestword : false,
            myShortestName(){

                const myshortestWordMessage = shortestWord(this.str);
                console.log(myshortestWordMessage);
                this.message = myshortestWordMessage;
                
                setTimeout (() => {
                    this.message = '';
                }, 3000);
            }
        }
    });
    
})








{
    str : '',
    message : '',
    showShortestword : false,
    myShortestName(){
        const myshortestWordMessage = shortestWord(this.str);
        console.log(myshortestWordMessage);
        this.message = myshortestWordMessage;
        setTimeout (() => {
            this.message = '';
        }, 3000);
    }
}