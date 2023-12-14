import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translate'
})
export class TranslatorPipe implements PipeTransform {

  transform(value: string, variant?:string):string {    
    switch (value?.toLowerCase()) {
      case 'half-blood': return `mestiz${variant == 'male' ? 'o' : 'a'}`;
      case 'muggleborn': return `hij${variant == 'male' ? 'o' : 'a'} de muggles`;
      case 'pure-blood': return 'sangre limpia';
      case 'grey': return `gris${variant == 'eyes' ? 'es' : ''}`;
      case 'hazel': return 'color avellana';
      case 'brown': return variant == 'eyes' ? 'marrones' : 'castaño';
      case 'black': return `negro${variant == 'eyes' ? 's' : ''}`;
      case 'red': return variant == 'eyes' ? 'rojos' : 'pelirrojo';
      case 'green': return 'verdes';
      case 'blue': return 'azules';
      case 'dark': return 'castaño oscuro';
      case 'blond': case 'blonde': return 'rubio';
      case 'white': return 'blanco';
      case 'bald': return 'calvo';
      case 'silver': return 'plateado';
      case 'sandy': return 'castaño claro';
      case 'male': return 'hombre';
      case 'female': return 'mujer';
      case 'boar': return 'jabalí';
      case 'swan': return 'cisne';
      case 'hare': return 'liebre';
      case 'doe': return 'cierva';
      case 'persian cat': return 'gato persa';
      case 'stag': return 'ciervo';
      case 'otter': return 'nutria';
      case 'Jack Russel terrier': return 'perro (Jack Russel terrier)';
      case 'tabby cat': return 'gato atigrado';
      case 'non-corporeal': return 'no-corpóreo';
      case 'horse': return 'caballo';
      case 'wolf': return 'lobo';
      case 'weasel': return 'comadreja';
      case 'goat': return 'cabra';
      case 'human': return `human${variant == 'male' ? 'o' : 'a'}`;
      case 'ghost': return 'fantasma';
      case 'half-giant': return 'semi-gigante';
      case 'werewolf': return 'hombre-lobo';
      case 'Fat Friar': return 'Fraile Gordo';
      case 'Moaning Myrtle': return 'Myrtle la llorona';
      case 'Tom Marvolo Riddle': return 'Tom Sorvolo Ryddle';
      case 'Bloody Baron': return 'Barón Sanguinario';
      case 'Nearly Headless Nick': return 'Nick Casi Decapitado';
      // case 'hawthorne':
      case 'hawthorn': return 'espino';
      case 'wainut': return 'nogal';
      case 'yew': return 'tejo';
      case 'cedar': return 'cedro';
      case 'birch': return 'abedul';
      case 'elm': return 'olmo';
      case 'holly': return 'acebo';
      case 'vine': return 'vid';
      case 'willow': return 'sauce';
      case 'fir': return 'abeto';
      case 'oak': return 'roble';
      case 'cherry': return 'cerezo';
      case 'cypress': return 'cipres';
      case 'mahogany': return 'caoba';
      case 'larch': return 'alerce';
      case 'chestnut': return 'castaño';
      case 'ash': return 'fresno';
      case 'unicorn hair': case 'unicorn tail-hair': return 'pelo de unicornio';
      case 'dragon heartstring': return 'fibra de corazón de dragón';
      case 'phoenix feather': case 'phoenix tail feather': return 'pluma de fenix';
      default: return value;
    }
  }

}
