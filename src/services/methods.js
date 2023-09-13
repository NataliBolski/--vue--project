export function createId() {
    return new Date().getTime().toString(); 
  }

export function formatDate(data) {
    const options = {
        year: 'numeric',
    }

    return new Date(date).toLocaleDateString('ru-RU', options)
}

