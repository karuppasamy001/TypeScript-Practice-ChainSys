class StrManipulation{
    word: string

    constructor(word:string){
        this.word = word;
    }

    append(word1: string){
        this.word = this.word + word1
    }

    prepend(word1: string){
        this.word = word1+this.word;
    }

    insert(word1: string, pos: number){
        let firstPart= this.word.slice(0,pos);
        let secondPart = this.word.slice(pos)
        this.word = firstPart + word1 + secondPart;
    }

    delete(word1: string, pos: number){
        if (this.word.indexOf(word1) !== -1 && this.word[pos] === word1){
            this.word = this.word.replace(word1,'')
        }else{
                console.log('The specified character is not in the word or position is out of range');
        }
    }

    print(){
        return this.word
    }

}


let word = new StrManipulation('arupp')
console.log("This is New Word Initialized : " + word.print())

word.append("asamyS")
console.log("This is After Adding 'asamyS' at end : " + word.print())

word.prepend('K')
console.log("This is after Adding 'K' At the Beginning : " + word.print())

word.insert('K', 12)
console.log("This is After Inserting Letter 'K' at the 12th index : " + word.print())

word.delete('p', 4)
console.log("This is After Deleting the Letter 'P' at index 4 : " + word.print())


