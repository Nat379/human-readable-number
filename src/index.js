module.exports = function toReadable (number) {
  
        if (number === 0) {
            return 'zero';
        }
    
        let readable = '';
        let chunkCount = 0;
    
        while (number > 0) {
            if (number % 1000 !== 0) {
                if (readable !== '') {
                    readable = `${convertChunk(number % 1000)} ${thousands[chunkCount]} ${readable}`;
                } else {
                    readable = `${convertChunk(number % 1000)} ${thousands[chunkCount]}`;
                }
            }
            number = Math.floor(number / 1000);
            chunkCount++;
        }
    
        return readable.trim();
    }
    
    function convertChunk(number) {
        if (number === 0) {
            return '';
        } else if (number < 10) {
            return ones[number];
        } else if (number < 20) {
            return teens[number - 10];
        } else if (number < 100) {
            return `${tens[Math.floor(number / 10)]} ${ones[number % 10]}`;
        } else {
            return `${ones[Math.floor(number / 100)]} hundred ${convertChunk(number % 100)}`;
        }
    }

    const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const thousands = ['', 'thousand', 'million', 'billion'];
