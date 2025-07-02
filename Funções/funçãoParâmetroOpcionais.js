// Parâmetros opcionais

function createTag(name, prefix, suffix) {
    if(prefix && suffix) {
        return `${prefix} ${name} ${suffix}`
    }
    if(prefix) {
        return `${prefix} ${name}`
    }
    return name;
}


const tag = createTag("Brunão", "Dev.")

console.log(tag)