1. Por que de las dos lineas con const solo una falla?const protege la referencia en memoria, no el contenido del objeto. Modificar una propiedad interna no cambia la referencia (valido), pero reasignar el objeto completo intenta cambiarla a una nueva direccion de memoria (error).
2. De donde salio el tipo de la variable con let?De la inferencia de tipos de TypeScript. Al inicializarla con un numero, el compilador dedujo automaticamente que era de tipo number.
3. Si el archivo tiene un error de tipos, por que Node lo ejecuta?Porque Node.js solo ejecuta JavaScript y no lee el tipado. Los tipos son exclusivos de TypeScript para desarrollo y desaparecen al ejecutarse (type erasure).
4. Cual comando revisa y cual ejecuta?Revisa: npx tsc --noEmit  Ejecuta: node <archivo>  
5. Hubo algun error o advertencia en la consola en el paso de JS?
No. JavaScript aplico coercion implicita: al usar '350' + 50, concanteno el texto en vez de sumar y devolvio '35050' sin advertir del fallo.