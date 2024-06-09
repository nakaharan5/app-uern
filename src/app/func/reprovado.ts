export const calcularMedia = (nota1: number, nota2: number, nota3: number): number => {
    return ((nota1 * 4) + (nota2 * 5) + (nota3 * 6)) / 15;
  };
  
  export const verificarSituacao = (media: number): string => {
    if (media < 4) {
      return "Reprovado";
    } else if (media < 7) {
        let notaNecessaria = 12 - media;
        return `Você precisa de ${notaNecessaria.toFixed(2)}`
    } else {
      return "Aprovado";
    }
  };