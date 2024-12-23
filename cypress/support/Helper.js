

class Helper {
    static findVote(text, votetext) {
        const voteRegExpResult =
        votetext.exec(text);
        const vote =
        voteRegExpResult && voteRegExpResult.length > 1 ? voteRegExpResult[1]: null;
        return vote;
      }

      static extractElements(inputString) {
        // Diviser la chaîne en utilisant le délimiteur '|'
        const elements = inputString.split('|');
    
        // Vérifier si la chaîne contient au moins deux éléments
        if (elements.length >= 2) {
            // Retourner les deux premiers éléments
            return [elements[0], elements[1]];
        } else {
            // Retourner un tableau vide si les éléments sont insuffisants
            return [];
        }
    }
}

export default Helper;