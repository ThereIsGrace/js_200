const sentences = ['    ABC abc','ABC abc     ',` first
second third
            fourth
sentence

`];
const filterSentence = (sentences) => {
    const filtered = [];
    sentences.forEach(sentence => {
        filtered.push(sentence.trim());
    });
    return filtered;
} 

console.log(filterSentence(sentences));