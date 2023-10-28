async function enviarScript(scriptText){
	const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
	main = document.querySelector("#main"),
	textarea = main.querySelector(`div[contenteditable="true"]`)
	
	if(!textarea) throw new Error("Abre un chat")
	
	for(const line of lines){
		console.log(line)
	
		textarea.focus();
		document.execCommand('insertText', false, line);
		textarea.dispatchEvent(new Event('change', {bubbles: true}));
	
		setTimeout(() => {
			(main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
		}, 100);
		
		if(lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 250));
	}
	
	return lines.length;
}

enviarScript(`
[suena tema musical suave]

[Voz masculina] "Había una vez,
una encantadora princesa.

Pero estaba condenada por un terrible hechizo

que sólo podía romperse
con el primer beso del verdadero amor.

La habían encerrado en un castillo

que vigilaba un horrible dragón
que escupía fuego.

Muchos valientes caballeros
habían intentado

liberarla de esta sombría prisión,

pero ninguno lo había logrado.

Y custodiada por el dragón, esperaba

en el último cuarto de la torre más alta

a su primer amor
y el primer beso del verdadero amor”.

[ríe] Ay, sí.

¡Como si estas cosas pasaran!

¡Esto es pura...!

[ruido de la cadena]

[suena "All Star"]

Alfonso Obregón como “Shrek”

Eugenio Derbez como “Burro”

Dulce Guerrero como “Fiona”

Humberto Vélez como “Lord Farquaad”

" CUIDADO CON EL OGRO
NO SE ACERQUE "

[gritos]

[eructo]

¡Vamos!

¡Vamos!

[aldeano] Debe estar adentro.

Muy bien. ¡Vamos por él!

[murmurando] Espera.

¿Sabes lo que esa cosa puede hacerte?

Sí, te pisa te dejará
como calcomanía.

[Shrek ríe]
Sí, en realidad, eso haría un gigante.

[gritos ahogados]

Los ogros son mucho peor.

Ellos se hacen trajes con
la piel que les quitan.

  ¡No!
  Se comen su hígado.

¡Extraen lo gelatinoso de sus ojos!

Sabe muy bien con pan tostado.

¡Atrás! ¡Atrás, bestia! ¡Si te acercas...

[grito ahogado]

Bien.

[gruñido feroz]

[gritos]

[sigue gruñendo]

[siguen gritando]

[susurrando] Esta es la parte
en la que salen corriendo.

[asombro]

[se mofa]

[riendo]

¡Y no se acerquen!

"Se buscan, recompensa
por criaturas de cuentos de hadas".

[suspiro]

[soldado] Esta ya está llena.

  [latigazos]
  ¡Llévensela!

[cantando]

¡Caminen rápido, caminen!

¡Dame esa escoba barata!
No volverás a volar.

20 monedas de plata por la bruja.
¡Que pase el siguiente!

¡Rápido!

  20 monedas.
  ¡Camina!

[ruido sordo]

[llorando] Esta jaula está muy pequeña.

Por favor, no me dejes.
Ya no seré tan burro.

¡Estudiaré
¡Dame otra oportunidad!

¡Ya cállate!

[soldado] ¡Siguiente!

  ¿Qué me trae?
  Este títere de madera.

No soy un títere.
Soy un niño de verdad.

5 chelines por el juguete poseído.

Llévenselo.

Papi, ¡por favor!
¡No dejes con ellos!

  Siguiente. ¿Qué me trae?

  Yo traigo un burro que habla.
  [el burro gime]

Bien. Te daré 10 chelines
si puedes probarlo.

Anda burrito, dile algo.

¿Bien?

Es que está un poco nervioso.

Es una verdadera maravilla.
¡Habla, cabeza de chorlito!

Ya oí suficiente. ¡Guardias!

[mujer] No. ¡Sí habla!

En serio.

Puedo hablar. Me encanta hablar.

Soy la criatura más parlanchina
que has visto.

  Quítenla de mi vista.
  [mujer] ¡No!

¡Lo juro! ¡Suéltenme! ¡Sí puede hablar!

[gritos ahogados]

¡Oigan! ¡Puedo volar!

  ¡Puede volar!
  [cerdos] ¡Puede volar!

¡Puede hablar!

¡Así es, tonto!
Ahora soy un burro que habla y vuela.

¿Han visto como su dinero vuela?
O caperucita y la a vuela

pero a que nunca han visto
como un burro vuela.

[risita]

Oh, oh.

[quejido]

¡Atrápenlo!

[jadeos y gruñidos]

[soldado] ¡Que no escape!

[jadeos]

[gemido]

[soldado 4] ¡Por acá!

¡Oye! ¡Ogro!

¿Sí?

Por ordenes de lord Farquaad,

estoy autorizado a ponerlos bajo arresto

y transportarlos a un lugar
donde podrán reinstalarse.

No me digas ¿Tú y cuántos más?

[grito de espanto]

¿Puedo decirte algo?

Que increíble reacción ante tal
situación ¡Fantastico!

¿Estas hablando con...migo?

  Claro, hablaba contigo.
  ¡Ah!

Oyes, estuvistes enorme.
Esos cuates me querían...

...como burro de carga
Pero llegaste así ¡bam!

Patitas pa' que las quiero
Se jueron de volada.

Fue muy chistoso verlos correr.

Genial. Que gusto.

Ah, que chido ser libre.

¿Por qué no te vas a celebrar
tu libertad con tus amigos?

Es que yo no tengo amigos y
no pienso ir al bosque yo solito.

¡Ey!
Tengo una ideota. Me quedaré contigo.

Tu eres VERDE deramente una maquina
de pelea. Haremos pomada a cualquiera.

[rugido]

¡Uy, guau! ¡Eso sí que asusta!

Y si el rugido no funciona

tu mal aliento seguro los desmaya.

Necesitas unas pastillas de menta
porque el hocico te apesta.

Como cuando me eché unas fresas podridas…
[habla entre dientes]

...no'mbre

Pa' inflar un zeppelin con
los gases que me salieron por detrás.

¿Por qué estás siguiéndome?

Te diré por qué.

♪ Porque 'toy solito ♪

♪ No hay nadie aquí a mi lado ♪

♪ No habrá problemas hoy ♪

♪ De mí ya se han burlado ♪

♪ Amigos debes tener ♪

¡Ya deja de cantar!

¡Ahora entiendo por qué no tienes amigos!

Guau.

Sólo un amigo dice la verdad
tan cruda.

Escucha, pequeño Burro.
Mírame bien. ¿Ya viste qué soy?

[Burro] Ah... eres

¿Muy alto?

¡No! ¡Soy un ogro!

Piensa: "Si te portas mal,
el ogro te va a comer".

¿Eso no te molesta?

Nones.

  ¿De veras?
  De veritas, de veritas.

  Oh.
  Hasta me caes bien ¿Cómo te llamas?

Eh...

Shrek.

¿Shrek?
¿sabes qué me gusta de ti, Shrek?

Eres de los cuates a los que les vale un
comino lo que los demás piensen de ti.

Eso es chido. Mis respetos
Eres buena bestia.

¡Mira eso!
¿Quién querría vivir en ese cuchitril?

Ese cuchitril es mi hogar.

¡Es adorable! Hermoso.
Eres un gran decorador.

Lo que alguien con talento puede
hacer con poco presupuesto.

Oh, que linda piedra.
¡Un detalle soberbio!

¿"Cuidado con el ogro"?

No creo que tengas muchos
amigos ¿o sí?

Me gusta mi privacidad.

A mí también.
Es otra cosa que tenemos en común.

Odio cuando alguien está dando lata.

Le hechas indirectas, y como no
entiende

pues no se va, y luego, el silencio
¿A poco no?

¿Puedo quedarme?

¿Qué?

¿Puedo quedarme aquí, porfis?

  ¡Oh, claro!
  ¿De veras?

No.

¡Por favor! ¡No quiero regresar!

No sabes que gacho es
que te consideren un monstruo.

Bueno, a lo mejor sí.

Por eso debemos estar unidos.
¡Déjame quedar, di que sí!

¡Porfis, porfis!

¡De acuerdo, quédate!

Pero sólo una noche.

[gritando] ¡Gracias!

¿Qué...? ¡No!

¡Será tan divertido!

Nos desvelaremos contando
historias macabras,

y, en la mañana,
yo preparo los tamales.

[gemido]

¿En dónde dormiré yo?

¡Afuera!

Ah caray.
Que padre, digo.

Claro, no te conozco, ni tú a mí,

así que prefiero dormir ajuera ¿no?

[sorbido de nariz]

Ya me voy.

Buenas noches.

[suspiros]

[Burro] Digo, me gusta

el aire libre, soy un burro.

Pero si estoy solito me aburro.

Pero ya estoy acostumbrado.

♪ 'toy solito ♪

♪ No hay nadie aquí a mi lado ♪

[ruido de burbujas]

[suspiros]

[rechinido]

¿Qué no te dije que te
quedaras afuera?

Estoy ajuera.

[traqueteo]

Muy bien chicos, es muy diferente
a la granja, pero no hay de otra.

No es como en casa, pero estaremos bien.

  ¡La cama es comoda!
  Te tengo.

[olfatea] ¡Encontré queso!

¡Ay!

[gemido]
Está duro.

  ¿Eres tú, Gorder?
  ¿Cómo lo supiste?

¡Basta! ¿Qué están haciendo en mi casa?

[quejidos] ¡Ey!

¡No! ¡A la vieja muerta
me la bajan de la mesa!

¿Dónde vamos a ponerla? La cama está ocupada.

¿Ah?

[jadeos]

¿Qué?

Vivo en un pantano.
Les pongo letreros. ¡Soy un ogro aterrador!

¿Qué tengo que hacer
para poder conservar mi privacidad?

Oh, no...

¡No!

[chisporroteo]

  Déjame.
  No me empujes.

[chirrido]

¿Qué están haciendo en mi pantano?

[resuena el eco] ¡Pantano!

[jadeando]

¡Salgan de aquí! ¡Fuera todos!

¡Muévanse, vamos, fuera! ¡Úshcale!

Vamos a meternos a la casa.

No. Ahí no.

[suspiros]

A mí ni me veas. Yo no los invité.

Ya sabemos que nadie nos invitó.

¿Qué?

Nos obligaron a venir aquí.

¿Pero quién?

[cerdito] Lord Farquaad.

Bufó y sopló
y luego... firmó un aviso de desalojo.

[suspiro] Entiendo.

¿Quién sabe en dónde vive
ese tal Farquaad?

Yo sé, yo sé dónde vive.

¿Hay algún otro, que sepa
donde encontrarlo?

  ¿Alguien lo sabe?
  ¡Yo!

  ¿Alguien?
  ¡Yo sé!

¡Preguuuntame!
¡Preguuuntame!

[suspira]

De acuerdo.
Que otra...

Atención a todas,
las criaturas de cuentos de hadas.

Ni se acomoden.
No son bienvenidos.

Escuchen, ¡voy a ir a ver
a ese tal Farquaad justo ahora

para que salgan de mis tierras
y regrese cada quien a su cuento!

[algarabía]

¡No!

¡Tú! Tú vendrás conmigo.

¡Eso era lo que quería escuchar!

Shrek y Burro, dos amigos que van
en busca de una gran aventura.

¡Que chido!

♪ Al camino voy ♪

Canta conmigo, Shrek.

♪ No puedo esperar.
Al camino voy ♪

¿Qué fue lo que te dije sobre cantar?

  ¿La puedo chiflar?
  No.

  ¿Y si la tarareo?
  Está bien, tararea.

[tararea]

[sonidos de ahogo]

Suficiente. Ahora hablará.

[tose]

[ríe]

[aclara la garganta]

"Corre, que nadie te pueda
alcanzar

No me podrás atrapar.
¡Soy el hombre de jengibre!"

Eres un monstruo.

El único monstruo aquí eres tú.

Tú y esos personajes de
cuentos de hadas

que arruinan mi mundo perfecto.

¡Dime! ¿Dónde están los otros?

¡Cerdo!

[gruñido]

Traté de ser paciente con ustedes.

¡Mi paciencia ha llegado a su limite!
Dime o te arrancaré...

¡Los botones no!
¡No mis botones de gomita!

Entonces, ¿quién los oculta?

Te lo cuento.
¿Tú conoces a Pim Pon?

¿A Pim Pon?

Sí, Pim Pon.

Sí, es un muñeco
muy guapo y de cartón.

Sí, se lava la carita
con agua y con jabón.

¡¿Con agua y con jabón?!

¡Sí, se lava su carita!

Se lava la carita con agua y con jabón.

[se abre la puerta]

¡Mi lord! Lo encontramos.

¿Y qué están esperando? ¡Tráiganlo!

[esfuerzo]

[jadea]

¡Oh!

El espejo mágico...

¡No le digas nada!

¡No!

[La galleta gime]

Buenas tardes.

Espejito, espejito dime

si no es este el reino más perfecto.

Bueno, en realidad tú no eres rey.

Eh... Thelonio.

¿Me decías?

Quise decir que "aún" no es rey.

Pero puedes llegar a serlo.
Cuando te cases con una princesa.

Continua.

[risa nerviosa]

Tan sólo pon atención, mi lord,

porque te voy a mostrar

a las solteras entre las
que puedes elegir.

Y ¡aquí están!

La soltera número uno,

es una doncella mentalmente
incomunicada de un reino muy lejano.

Le gusta el sushi
y meterse al jacuzzi a todas horas.

Sus pasatiempos son cocinar y
atender 2 malvadas hermanas.

¡Apláudanle a Cenicienta!

La número dos
es una soltera

que usa capa

Aunque vive con 7 varones,
no es chica fácil.

Besa sus helados labios
y descubre su pasión.

Vamos. ¡Un aplauso a Blanca Nieves!

Última, pero igualmente bella,

la número tres,
es la pelirroja

custodiada por un dragón
¡en un castillo rodeado de lava ardiente!

Pero no te dejes engañar.
Es una fiera

que gusta de piñas coladas
y mojarse en la lluvia.

Será suya para rescatar:
¡la princesa Fiona!

Bien, ¿cuál te gusta
a la soltera número uno,

la número dos o la número tres?

¡Dos!

¡Tres!

  ¡Dos!
  ¡Tres!

¿Tres? ¿Uno? ¿Tres?

¡Tres! ¡Pide la tres, mi lord!

La tengo. ¡La número tres!

Lord Farquaad, has elegido a la princesa Fiona.

[suena "Escape The Piña Colada"]

Princesa Fiona. Es perfecta.

Sólo tengo que buscar a alguien que vaya...

Pero debo decirte algo
que pasa por las noches.

  Lo tengo.
  Sí, pero cuando el sol se pone...

¡Silencio! Haré de esta
princesa Fiona mi reina,

y ¡Duloc por fin tendrá
al rey perfecto!

Capitán, reúna sus mejores hombres.

Porque organizaremos un torneo.

ESTACIONAMIENTO LANCELOT

[relinchos]

Ahí 'ta, esto es Duloc.

Te dije que sabía.

Entonces, este debe ser
el castillo de lord Farquaad.

[Burro] Es un gran complejo.

¿Y el tamaño será
para compensar otro complejo?

[risa]

Eh...

'perate, Shrek.

¡Oye, tú!

[gritos]

Espera un segundo. No voy a comerte.

Sólo quiero...

[suspiros]

[gemidos]

[torniquete trabado]

[suspiro]

[música ambiental]

Que silencio.

[ruido chirriante]

Demasiado silencio.

"CURIOSIDADES Y RECUERDITOS"

¿En dónde están todos?

Ey, ¡mira esto!

" INFORMACIÓN
JALE "

[traqueteo]

[rechino]

[tic tac de reloj]

[el sonido se acelera]

[suena música folk]

♪ Duloc, pueblo ideal donde hay perfección ♪

♪ Bienvenida da. Nuestras reglas son: ♪

♪ En control siempre estén
Todos llévense bien ♪

♪ Duloc, el lugar feliz ♪

♪ Pisar césped es nulo ♪

♪ Asear pies y cu...tis ♪

♪ Duloc es ♪

♪ Donde vives muy feliz ♪

[sonido cámara foto]

" BIENVENIDOS A DULOC "

Guau.

¡Otra, otra, otra!

¡No! No.

[sonido de trompetas]

[Farquaad] Valientes caballeros.

[Farquaad] Ustedes son los caballeros
más valientes de mis tierras.

[Burro tararea]

Te estás ganando una patada en las pompis.

Oh, ya me calló.

[algarabía de la multitud]

Y ese campeón tendrá el honor...
No, no, el privilegio

de ofrecerse a
rescatar a la princesa Fiona

de la fiera custodia de un dragón.

Si por alguna razón,
el ganador no lo consigue,

el 2º lugar tomará su lugar,

y el que sigue, y el que sigue.

Algunos tal vez mueran, pero es un
sacrificio que estoy dispuesto a aceptar.

[aplausos de la multitud]

" APLAUDAN "

¡Ahora que comience el torneo!

[algarabía]

¿Qué es esa cosa?

[asombro]

[con espanto] ¡Uy, que horror!

Oye, no le digas así.

  Es sólo un burrito.
  ¿Qué?

Me doy cuenta. Caballeros,
¡Hay cambios!

Aquel que mate al ogro, ¡será
nombrado campeón! ¡Es todo suyo!

[espectador] ¡Fuera de aquí!

¿Qué pasa? ¿Por qué la agresión?

[espectador 2] ¡Acaben con él!

¡Vamos a arreglarlo con una cerveza!

¿No? Si eso quieren.

¡Entrenle!

[suena "Bad Reputation"]

Shrek, ¡echamelo!

[algarabía]

¡Sí!

¡Dale con la silla!

[algarabía de los espectadores]

[ríe]

¡Sí!

[gruñidos]

[Shrek] ¡Gracias!

¡Muchísimas gracias! Doy clases
los jueves, no cobro mucho.

[Shrek ríe]

[espectadores horrorizados]

¿Doy la orden, señor?

No, tengo una mejor idea.

Pueblo de Duloc, ¡les presento a nuestro campeón!

[algarabía de la multitud]

¿Qué?

[Farquaad] Felicidades, ogro.

Te haz ganado el honor de embarcarte
en una gran y noble búsqueda.

Es lo que estoy haciendo.
Busco que me devuelvas mi pantano.

¿Tu pantano?

¡Sí, mi pantano!

¡En el que tú metiste a las criaturas
de los cuentos de hadas!

¿Ah sí? Está bien, ogro,
hagamos un trato.

Haz esta búsqueda por mí
y yo te devolveré tu pantano.

Quiero que esté como estaba.

Hasta el último hongo
venenoso cubierto de lodo.

¿Y los invasores?

Serán desalojados.

¿Qué clase de búsqueda?

[Burro] Oséase.

Que tendrás que buscar un dragón

y rescatar una princesa
para recuperar tu pantano

que ya no es sólo tuyo

porque lo llenó de fenómenos

  ¿O me equivoco?
  ¿Sabes qué?

Debe haber buenas razones
por las que los burros no hablan.

Chale, no entiendo, Shrek.

¿Por qué no te
comportas como un ogro?

¿Por qué no lo estrangulas?
¿O mueles sus huesos?

Que sé yo.
Alguna de tus ograciosadas<i/>.

¡Tengo una idea!

Podría degollar a toda la aldea

y poner sus cabezas en una lanza.

Agarro un cuchillo, les abro las vesículas
y me bebo sus fluidos gástricos.

¿Te late que haga eso?

Eh... no, creo que no.

Para tu información, los ogros somos
muy diferentes a lo que creen.

¿Ejemplo?

 ¿Ejemplo?

De acuerdo... los ogros son ¡como cebollas!

[olfateo]
¿Apestan?

Sí  ¡No!

  ¿O te hacen llorar?
  ¡No!

Si los dejas al sol se ponen cafes,

y le salen pelitos blancos.

¡No! ¡Capas!

Las cebollas tienen capas.

¡Los ogros tienen capas! Las cebollas las tienen.

¿Entiendes? Ambos tenemos capas.

[suspiro]

Oh, ambos tienen capas.

[olfatea]

Pero no a todos les gustan las cebollas.

¡Pasteles! ¡A todos
les gusta el pastel!

A mí me vale lo que le guste a todos.

Los ogros no son pasteles.

¿Qué tal un helado napolitano?

Tiene capas de sabores,
a todos les gustan,

no conozco a nadien
que no le encante el helado napolitano.

¡No! ¡Ya cállate irritante
mini bestia de carga!

¡Los ogros son igual que las cebollas!
Y se acabó.

Hasta la vista. Ahí te ves.

El helado napolitano es lo más
delicioso que hay en todo el planeta.

[Shrek] ¿Sabes?
¿Por qué no mejor tarareas?

[Burro] ¿Tienes un trapito?

Ay, es que me estoy babeando todo.
Se me hace agua a la boca...

[suena "I'm On My Way"]

[exclamación]

¡Shrek! ¿Tú hiciste eso?
No manches.

Avisa antes de echarte uno.

  ¡Traía la boca abierta!
  Créeme, Burro,

si hubiera sido yo, estarías muerto.

[olfateo]

Huele a azufre.

  Nos estamos acercando.
  Ay sí tú, azufre.

¿A quién quieres engañar?

Si hubiera sido Azufre
Mi nariz no sufre.

Azufre, ja, ja.

[estruendo]

¡Sí caben mis muebles,
pero me queda muy lejos!

[risa]

¿Shrek?

¿Te acuerdas cuando dijistes
que los ogros tenían capas?

Sí.

Pues, yo tengo algo que confesarte.

Los burros no tienen capas.

¿Has oído decir que "el miedo
no anda en burro"?

Sí, claro. Es un dicho
muy famoso.

Pues es una mentirosa.

No vas a decirme que
te da miedo la altura.

No, la altura no me da miedo,
lo que me da miedo es caerme a

ese lago de lava ardiendo.

Vamos, Burro. No voy a dejarte
solo ¿De acuerdo?

Tienes todo mi apoyo moral.

Vamos a superar esto juntos,
caminando paso a pasito.

  ¿De veras?
  De veritas, de veritas.

Claro, el burro por delante.

No te detengas, y no mires para abajo.

Abajo, no miraré.
No me detengo y no miro abajo.

No miro abajo. No. miro.
No miro abajo.

[jadeo]

¡Shrek! ¡Ya miré abajo!

Santa cachucha, ¡no puedo hacerlo!
Déjame regresar. Porfis.

  Pero ya estamos a medio camino.
  ¡Pero la mitad segura es la de atrás!

Está bien. No tengo tiempo para esto.
Si quieres regresa.

¡Shrek, no! ¡Espera!

Ah, bueno entonces.

Vamos a bailar.
[Cantando] Vamos a bailar.

¡No hagas eso!

Lo lamento. ¿Hacer qué?

Oh, ¿esto?

¡Sí, eso!

¿Eso? ¿Sí? ¿Lo hago? Muy bien.

[Burro grita]

¡No, Shrek, no!

¡No! ¡Basta!

¡Dijiste que lo hiciera! Y eso hago.

Voy a morir. Shrek, voy a morir.

Oh.

Sí se pudo.

Bueno.

¿Don'ta la bestia
lanza fuego, caramba?

Adentro, está esperando que la rescatemos.

Yo estaba hablando del dragón, Shrek.

[agua goteando]

[viento soplando]

  [Burro murmura] ¿Tienes miedito?
  No, pero...

[siseo]

Bien. Yo tampoco.

[jadeos]

Aunque, no es malo sentir miedo.

El miedo es la respuesta
sensible a una situación desconocida.

Desconocida y peligrosa, ante

un dragón que lanza fuego
y que come caballeros.

No quiere decir que un es cobarde

sólo por tener un
poquito de miedo, ¿no?

Porque no soy gallina. Lo que
pasa es que cuando  

[grito]

Burro, 2 cositas, ¿sí?

Cá... llate.

Ahora, ve para allá a ver si
encuentras una escalera.

¿Escalera? ¿Pues qué no veníamos
por una princesa?

La princesa está subiendo la escalera

en el último cuarto
de la torre más alta.

Ay, sí tú ¿Cómo sabes?

Lo leí en un cuento de hadas.

Bueno, 'tons encárgate del dragón
y yo de la escalera.

Y cuando la encuentre
¡Pobrecita!

Uy, no va a saber si sube o baja.

[crujido]

No'mbre va a sentir pasos.

Soy el amo de las escaleras.

No, amo no. Odio las escaleras.

Me va a rogar:
"Ya no me subas, Burro"

[gruñido]

Vaya, al menos ya sé dónde está
la princesa, pero ¿dónde está el...?

¡Dragón!

[grita]

Burro, ¡cuidado!
[gritos]

[gritos]

Señor de los burros, protégeme.

¡Te tengo!

[ruge]

[jadeos]

[exclamación]

[grito]

[gime]

[ruge]

No. ¡No!

¡Qué dientes tan grandes tienes!

Digo, ¡qué dientes tan blancos!

Y que hermosa sonrisa, seguro
tu comida te lo dice a cada rato.

¿Qué pasta dental usas?
Ha de tener mentol.

Para el momento de estar cerca.

Y, ¿sabes qué más?

Eres un... ¡Primor de dragonzuela!

Claro, preciosa. Que ciego
fui, eres

una dragoncita preciosa.
Un modelo de belleza femenina y 

¿Qué te pasa? ¿Tienes algo en el ojo?

¡Oh!

Bueno, me gustaría
quedarme pero... [tose]

Soy asmático, y me molesta

un poquitín el humo ¿Sabes?
[risa timida]

¡Shrek!

[gime de miedo]

¡Shrek!

[gemido]

[quejido]

  ¡Despierta!
  ¿Qué?

¿Tú eres la princesa Fiona?

Yo soy la princesa...

...y espero al caballero que me salve.

Ah, qué tierna. Ahora, vámonos.

Esperad, sir caballero.

Al ser nuestro primer encuentro...

¿No debería ser un maravilloso
romántico y momento?

Sí, perdone usted.

  No hay tiempo.
  Esperad ¿Qué estáis haciendo?

Deberíais cargarme hasta

la ventana y bajar
hasta vuestro valiente corcel.

Has tenido mucho tiempo
para planear esto, ¿no?

[Fiona asiente, grita]

Pero ¡debeís congelar este momento!

¡Podriaís recitarme un poema épico!

¿Una balada? ¡Un soneto!

¿Un refrán? ¡O lo que sea!

No sé de esas cosas.

Entonces al menos quisiera
conocer el nombre de mi salvador.

Eh... Shrek.

Sir Shrek.
[se aclara la garganta]

Os ruego que aceptéis esta prenda
como muestra de mi gratitud.

¡Órale!

[rugidos de dragón]

¿No habéis matado al dragón?

Todavía no me voy

  ¡Date prisa!
[grita]

[Fiona] Pero ¡así no era la historia!

Debisteis blandir vuestra espada.

Como los otros caballeros.

  Sí, pero ya son calacas rostizadas.
  Ese no es el punto.

Esperad. Por ahí no.
¿No sabéis dónde está la salida?

Si no soy burro.

¿Qué clase de caballero sois vos?

El único en mi clase.

[Burro] No es que te diga que no.

¿No crees como que vas muy rápido?

Además como que me raspan
tus cachetes ¿no?

Te parecere antiquado pero

No quisiera que nos apresuráramos
a tener una relación más intima.

No estoy emocionalmente
preparado para un

compromiso, tan grandísimo,
es la palabra que

buscaba. ¡Ey, no me manosees!

Oyes, ¿qué haces?

Bien. Vamos a platicar un poco
nena, creo que primero, debes

conocer mi pasado. Podemos
jugar matatenas

o enviarnos cartitas.

Y que me digas "Angelito de
la creación"...

Además, no sé a que horas
vas por el pan.

¡Ey, no!
¡Esa es mi colita!

No me la agarres...

¡No!

[gruñidos]

[rugidos]

  ¿Qué hubo, princesa?
  ¡Habla!

¡El problema es callarlo!

[gritos]

[rugidos]

[jadeos]

¡Ustedes corran a la salida!

Yo me encargo del dragón.

[voz de cámara lenta]
¡Corran!

[exclamación de pánico]

[gritos]

[pánico]

[rugidos]

[gemido]

[rugido]

[gemido]

[sigue rugiendo]

¡Lo lograsteis!

¡Me habéis rescatado! Sois increíble.

Sois maravilloso. Sois...

Muy poco ortodoxo, diría.

Pero vuestra hazaña fue grandiosa
vuestro corazón muy noble.

Ahora estoy en deuda con vos.

[se aclara la garganta]

Y, ¿qué sería de un valiente caballero
sin su noble corcel?

¿Oístes lo que dijo?
Me llamó "noble corcel".

Cree que soy un corcel.

[Fiona ríe]

La batalla fue un éxito.

Podeis quitaros vuestro casco,
Sir caballero.

Ah... No.

¿Por qué no?

Porque... no me peiné.

Por favor. Ansío ver
vuestro rostro.

Pues no... ansiéis tanto.

Pero ¿cómo vas a besarme?

  ¿Qué? De eso no me dijeron nada.
  ¡Será un bono extra!

No, es el destino.
Debéis haberlo leído en un cuento.

Una princesa encerrada en un
castillo, vigilada por un dragón,

la rescata un valiente caballero

y le da su primer beso de verdadero amor.

¿Quién? ¿Shrek? Crees...

Un segundo.
¿Crees que Shrek es tu verdadero amor?

Pues, sí.

[risas]

¡Crees que... que burra!

¿Qué es tan divertido?

Digamos que no soy tu tipo, ¿De acuerdo?

Claro que lo sois. Vos sois mi salvador.

Ahora... Quitaros el casco.

Créeme que no creo
que sea buena idea.

  Que te quites el casco.
  No me lo quitaré.

  Que te lo quites.
  ¡No!

  ¡Ahora!
  ¡Está bien!

Tranquila. Como lo ordene, su majestad.

[suspiro]

Eres un... ogro.

Oh, tú esperabas a un príncipe azul.

Pues, de hecho, sí.

No. Esto es un error. Tú no debías ser un ogro.

[suspiros]

Princesa, Lord Farquaad
me envió para salvarte.

Él quiere casarse contigo.

Y, ¿por qué no vino
él a rescatarme?

Es una gran pregunta.
Lo sabrás llegando allá.

Pero tenía que
rescatarme mi verdadero amor.

no esperaba un ogro y su mascota.

Ya no soy un "noble corcel"...

Princesa, estás haciendo
más difícil mi trabajo.

Pues lo siento, pero tu trabajo
no es mi problema.

Puedes decirle a Lord Farquaad que si
desea venir a rescatarme como se debe,

estaré esperándolo en este lugar.

¡Oye! no soy tu mensajero
¿entiendes? Sólo llevo paquetes.

No te atrevas.

[exclamación]

  Nos vamos, Burro.

Ajá, voy atrasito de ti.

¡Bájame o te arrepentirás de las consecuencias!

¡Esto es indignante! ¡Bájame!

[gritos]

Ahí te va otra pregunta.
Digamos que le gustas

pero no le quieres dar alas.

¿Cómo le dices la verdad
sin lastimar sus sentimientos

pero que tampoco te queme ni te coma?

Sólo dile que no es tu verdadero amor.

Todos sabemos lo qué pasa cuando
encuentras a tu...

[quejido] ¡Oye!

Espero que lleguemos a Duloc
muy pronto.

Sí, te encantará, princesa.
'Ta rete bonito.

Háblame de mi futuro novio,
Lord Farquaad. ¿Cómo es él?

Deja que yo te lo diga, princesa.

Los hombres como Farquaad son
"chicos" muy especiales.

[risas]

¿Y sabes que, Shrek? Es tan pequeño
que no le cabe la "menor" duda.

[risas]

Basta de estarse mofando.

Están celosos porque nunca

estarán a la altura de un
gran señor como Lord Farquaad.

Sí, tal ves tengas razón, princesa.

Veremos si estás "a su altura"
mañana que lo veas.

¿Mañana? ¿Tan lejos está?

¿No deberíamos acampar?

No, nos tardaríamos más.

Debemos seguir.

Pero hay ladrones en el bosque.

¡No es mala idea, Shrek!
Acampar no estaría mal.

No se preocupen, Yo asusto más

que cualquier cosa en este bosque.

¡Quiero un lugar donde
acampar, ahora!

[pájaros salen volando]

[jadeo]

¡Ey! Aquí hay un lugar.

Shrek, debe haber algo mejor.

Ese no es lugar para una princesa.

No, es perfecto.

Puedo darle toques hogareños.

¿Toques hogareños? ¿Como cuál?

[crujido]

Una puerta. Caballeros, buenas noches.

Si quieres te puedo contar un cuento
antes de dormir.

[Fiona] ¡Dije buenas noches!

¿Qué estás haciendo?

[risas]
Ay, no seas  Era broma.

[Shrek] ¿Ves esa? Es el ogro mayor

el único que escupió
abarcando 3 plantios de trigo.

Bien, chido.

¿Y en las estrellas puedes
leer mi futuro?

Las estrellas no dicen
el futuro, Burro. Cuentan historias.

Mira, está la constelación pedorrín
La más graciosa.

Y sabes porqué ¿no?

Me huele que son inventos tuyos.

No, mira. Ahí está él,

y un grupo de cazadores
huyendo de sus malos olores.

Yo nomás veo un montón de puntitos.

Sabes, Burro, a veces las cosas
no son lo que parecen.

¿Eh?

Olvídalo.

[suspiros]

Oye, Shrek, ¿qué haremos
cuando recuperemos nuestro pantano?

¿"Nuestro" pantano?

Cuando entreguemos la princesa
y vayamos a nuestro pantano.

¿"Nuestro"? Me suena a manada.
No hables en plural, Burro.

Yo la entregaré y es mi pantano.

Lo primero que voy a hacer será
levantar un muro de 3 metros.

Me ofendistes, Shrek.
Me ofendistes regacho.

¿Sabes qué creo?

Creo que eso del muro
es para que no entre nadie.

[sarcástico] No, ¿eso crees?

¿Me ocultas algo?

Olvídalo, Burro.

Es otro ejemplo como el de la
cebolla, ¿verdad?

No, sólo quiero que me dejes dormir
y que dejes de decir tonterías.

¿Por qué no quieres hablar?

¿Por qué insistes en hablar de esto?

  ¿Por qué pones ese muro?
  No pongo nada.

  Claro que sí.
  Burro, te lo advierto.

¿A quién quieres evitar, Shrek?
¿A quién?

¡A todo mundo! ¿Ya?

Ya estamos progresando.

¡Oh, ya déjame en paz!

¿Cuál es tu problema?

¿Qué tienes en contra del mundo?

Yo no soy el del problema. ¡El mundo es
el que parece tener problemas conmigo!

La gente me ve y dice
"¡Ah! ¡Auxilio! ¡Corran!

¡Un enorme estúpido y feo ogro!".

[suspiro]

Me juzgan sin siquiera conocerme.

Por eso prefiero estar sólo.

¿Sabes qué?

Cuando te conocí,

no pensé que fueras
un estúpido y feo ogro.

Sí, lo sé.

Y, ¿hay constelaciones de burros?

Por ejemplo está esa, el asno menor.
Pequeño y hablador.

Ah, sí, ya la ví.

Es la brillante, grandota de arriba
¿no?

  Esa es la Luna.
 Ah, rayos.

[suena música suave]

[Farquaad] De nuevo. Quiero verla otra vez.

[la música rebobina]

Espejito, espejito, corre video.
Muéstrame la princesa.

[gime]

[música suave]

¡Ah! Perfecta.

[ronquidos]

[vocaliza]

[silbido del pájaro]

[vocaliza nota muy alta]

[ruido de fritura]

[bostezo]

[Burro] Así, en la orejita.

Nena, montate en mi silla
y te doy un aventón.

Burro, despierta.

  ¿Qué?
  [Shrek] Despierta.

  ¿Qué?
  [Fiona] Buenos días.

¿Cómo quieren sus huevos?

  ¡Buenos días, princesa!
  ¿Por qué tanta amabilidad?

Ayer que te conocí, no me porté muy bien.

Quiero reparar el daño.

Después de todo, tú fuiste a rescatarme.

Gracias.

[olfatea]

Coman. Nos espera un largo día
por delante.

[eructo]

  ¡Shrek!
  ¿Qué? Es un cumplido.

"Mejor afuera que adentro".
Siempre lo he dicho.

No es manera de comportarse con una princesa.

[eructos]

Gracias.

Es igual de puerca que tú.
[risita nerviosa]

Oye, no eres lo que esperaba.

No deberías juzgar a las
personas antes de conocerlas.

[Fiona vocaliza]

¡La liberté! ¡Ey!

¡Princesa!

¿Qué estás haciendo?

Tranquila, mon chérie ¡soy tu salvador!

Y voy a rescatare de esa bestia...

...verde.

[Shrek] ¡Oye!

¡Esa es mi princesa! ¡Búscate la tuya!

¡Por favor, monstruo!
¿No ves que estoy ocupado?

Oye, amigo,
¡no sé quién te crees que eres!

¡Que torpe soy! La la la.
Permíteme presentarme.

¡Mosqueteros!
[risa]

[sonido de acordeón]

[vocalizan]

♪ Lo que al rico robo ♪
al pobre lo dono ♪

♪ Toma un porcentaje ♪

♪ Yo no ambiciono ♪

♪ Rescato damiselas,
Gran virtud. ♪

♪ Qué valor, monsieur Hood ♪

♪ A bailar ♪

[silban]

♪ Por honor y bellas,
dispuesto a luchar ♪

  ♪ Y después con ella se quiere acos  ♪
  ♪  tumbrar ♪

♪ No ♪

♪ Y si un gran ogro feroz de una dama
va en pos, que mal. ♪

  ♪ Que mal ♪
  ♪ Que mal ♪

♪ Bella y bestia juntos ver,
me vuelve en loco total ♪

♪ Total, y eso está fatal ♪

♪ En su corazón, mi cuchillo
he de clavar ♪

♪ Pongan mucha atención
Pues voy a comenzar ♪

[gemido]

[Fiona grita]

[jadeo]

¡Qué tipo tan desagradable!

Atrevida...

[música de acordeón]

[grita]

[con timidez] ¿Nos vamos?

Que femenina.

Oye
¿Eso dónde lo aprendiste?

¿Qué?

¡Eso! Lo que hiciste.
¡Me impresionaste!

¿Dónde lo aprendiste?

Bueno, cuando una vive sola,

tiene que aprender artes
marciales en caso de que...

¡Hay una flecha en tu trasero!

¿Qué?

Oh, llegó aquí.

¡Oh, no! Es mi culpa.

  Cuanto lo siento.
  ¿Qué pasa?

  Hirieron a Shrek.
  ¿A Shrek? ¿Lo hirieron?

¡No, Shrek se morirá!

Burro, estoy bien.

No me hagas esto, Shrek.
Soy muy joven para que mueras.

Levanta las piernas, hay que dar
respiración de hocico a boca.

¡Burro! Cálmate ya.

Si quieres ayudar a Shrek, ve al bosque

a buscar una flor azul
con espinas rojas.

Flor azul, espinas rojas.
Que no se me olvide. Flor azul...

Flor azul, espinas rojas.

No te mueras, Shrek.
Si ves un túnel, ¡no te acerques a la luz!

  ¡Burro!
  ¡Burro!

Sí. Flor azul, espinas rojas.

  Flor azul, espinas rojas.
  ¿Para qué son las flores?

  Para deshacernos de Burro.
  Ah.

Ahora, no te muevas,
mientras saco esta cosa.

¡Oye! ¡Cuidado con mis nachas!

Lo siento, pero tengo que sacarla.

No, cuidado.

En lugar de ayudar...

  estás perjudicando.
  No te muevas.

  Pido tiempo.
  ¿Quieres...?

Muy bien. ¿Tú qué propones que haga?

Flor azul, espinas rojas.

¡Sería más fácil si no juera daltónico!

Flor azul, espinas rojas.

[Shrek] ¡Ay!

¡No te mueras, Shrek! ¡No tardo!

¡Ay! ¡No sale!

Ya nomás la puntita, ya viene.

[quejido]

[Burro se aclara la garganta]

No pasó nada. Sólo estábamos...

Si querían estar solos,
nomás tenían que decirlo.

¡Por favor! Es lo último que
se me hubiera podido ocurrir.

La princesa sólo estaba...
[quejido de dolor]

¡Auch!

¿Qué es eso? ¿Eso era sangre?

[gruñe]

[suena "My Beloved Monster"]

[croar de rana]

[soplido]

¡Oye!

[ambos ríen]

Ahí está, princesa.

Tu futuro te espera.

  ¿Es Duloc?
  Sí, lo sé.

Shrek cree que así Farquaad
quiere superar su complejito,

Pa' mi que debe tener apenas una...

Creo...

que mejor continuamos.

Claro. Pero ¿Shrek?

Estoy preocupada por Burro.

  ¿Qué?
  Es decir, míralo.

No se ve muy bien.

¿De qué estás hablando? 'toy bien.

Eso es lo que dicen,

y, luego hay que cargarlos.

  Muertos.
  [Shrek] Tiene razón.

Que mal semblante. Siéntate.

Deberías sentarte.

No quería decir nada,

pero siento mi cuello torcido.

  [huesos crujen]
  ¡Auch! ¿Ven?

¿Tienen hambre?
Buscaré algo de cenar.

Encenderé la fogata.

¿Adónde van?
¡Demonios, no siento mis dedos!

¡Ni tengo dedos!

Necesito que me apapachen.

[saboreando]

Que delicia de platillo.

¿Qué es?

Rata de campo.

Rata rostizada.

No me digas.

Pues está deliciosa.

También es buena guisada.

No me gusta presumir, pero hago
un guisado de rata exquisito.

[suspiros]

Creo que cenaré
muy diferente mañana en la noche.

[traga]

Tal vez quieras visitarme
en mi pantano algún día.

Te prepararé platillos exquisitos.

Sopa de sapo,
ojo de pescado, tú pide.

Me encantaría.

[ríe]

[suena "You Belong To Me"]

Em...

  ¿Princesa?
  ¿Sí, Shrek?

Yo... Me pregunto si tú...

¿Vas a comerte eso?

Que romántico. Miren que puesta de sol.

¿Puesta de sol? ¡No! Es decir,
Ya es tarde, muy tarde.

  ¿Qué?
  Un momento.

Yo sé que te pasa.

  Tienes miedo a la obscuridad, ¿no?
  ¡Sí!

Sí, la obscuridad me aterra.

  Será mejor que me meta.
  No tengas miedo, princesa.

A mi me daba miedo la obscuridad,
hasta que...

No, 'perensen.
Todavía le tengo miedo.

[suspiros]

Buenas noches.

Buenas noches.

Ya me dí cuenta de lo que
pasa aquí.

¿De qué hablas?

No me engañas.
Soy un animal y tengo instintos.

No soy tan burro. Eso se siente.

Estás loco. Voy a llevársela
a Farquaad.

Por favor, Shrek.
Nomas huele las feromonas.

Entra a decirle lo que sientes.

Yo...

No hay nada que decir.
Además, aunque le dijera

que...
Y no estoy reconociendo nada, porque...

Es una princesa, y yo soy...

¿Un ogro?

Sí. Un ogro.

¿Adónde vas?

A traer más leña.

[suspiro]

¿Princesa? ¿Princesa Fiona?

Princesa, ¿don'tas?

[aleteo de murciélagos]

¿Princesa?

  [crujido]
  [sobresalto]

Está muy tenebroso, ya no juego.

[Fiona grita]

[grita]

  ¡No!
  ¡No, auxilio!

  [siseo]
  ¡Shrek!

  ¡Shrek!
  No, cállate.

¿Qué le hicistes a la princesa?

Burro, soy la princesa.

Soy yo, en este cuerpo.

¡Santo Dios! ¡Te comistes a la princesa!

  ¿Puedes oírme?
  ¡Burro!

  ¡Sigue respirando!
  ¡No!

¡Yo te sacaré de ahí! ¡Shrek!

  ¡Shrek!
  Soy yo, veme.

[entre dientes]

¿Princesa?

  Qué te pasó? Eres... diferente.
  Soy fea, lo sé.

  [Voz de longe Moco] Horrible, horrible

Por eso no debiste comer ratas.
Eres lo que comes.

  Bueno eso digo yo...
  No.

He sido así desde que tengo memoria.

¿Qué dices?
Si yo nunca te había visto así.

Sólo pasa cuando se pone el sol.

"De día soy una, de noche otra.
Esa será tu apariencia

hasta el primer beso
del verdadero amor

y, tomarás la forma
del verdadero amor".

Qué bonito. No sabía que eras poeta.

Es un hechizo.
[suspira]

Cuando era niña,
me hechizó una bruja.

En las noches me convierto en esto,

en esta horrible y fea bestia.

Me confinaron a una torre a esperar
a que me rescatara mi verdadero amor.

Por eso debo casarme
con lord Farquaad mañana

antes de que se ponga el sol
y llegue a verme...

...así.

[llanto]

'tá bien. Cálmate. No es tan malo.

No eres tan fea.
Bueno, no voy a mentir. Eres fea.

Pero nomás tantito y en las noches.
Shrek es feo a todas horas.

Pero, Burro, soy una princesa,

y no es así como una princesa debe ser.

Princesa, ¿y si no te casas con Farquaad?

Debo hacerlo.

Sólo el beso del verdadero amor
romperá el hechizo.

Pero eres una especie de ogra,

y Shrek, tienen tanto en común.

¿Shrek?

Princesa... ¿cómo estás, antes que nada?

¿Bien? Yo también. Estoy bien.

Vi esta flor y pensé en ti
porque es bonita y...

Bueno, en realidad, no me gusta
pero creí que te gustaría

porque eres bonita. Pero aún así me gustas.

[tartamudea]

Tengo problemas. Muy bien, aquí voy.

[Fiona] No me puedo casar
con quien yo quiera.

Fíjate bien, Burro.

Debes pensar,

¿quién podría amar a una bestia
tan desagradable y fea?

La realeza y la fealdad no hacen pareja

Por eso no puedo quedarme con Shrek.

Sólo podre vivir feliz para siempre

casándome con el verdadero amor.

[suspira]

¿No te das cuenta, Burro? Así tiene que ser.

Sólo así el hechizo se romperá.

Pero debes decirle a Shrek la verdad.

¡No! No puedes decir nada.
Nadie debe saberlo nunca.

¿De qué me sirve hablar
si tengo que guardar secretos?

Promete que no lo dirás. Promételo.

'Ta gueno. No se lo diré.
Pero tú deberías.

Antes de que termine esto
voy a necesitar una buena terapia.

Ya tengo un tic en el ojo.

[suspiros]

[ronquidos]

[Fiona] Se lo digo, no se lo digo.

Se lo digo, no se lo digo.

[suspira] Sí se lo digo.

¡Shrek! Shrek, hay algo que quiero...

Shrek.

¿Estás bien?

¡Perfecto! Jamás estuve mejor.

Yo... hay algo que debo decirte.

Princesa, tú no tienes que decir nada.

  Ya escuché bastante anoche.
  ¿Escuchaste lo que dije?

Cada palabra.

Creí que lo entenderías.

¿Entender qué?

Fuiste muy clara: ¿quién podría amar
a una bestia tan desagradable y fea?

Pero creí que esto te importaría así.

Pues ya ves que sí.

[relinchido]

Justo a tiempo.

Princesa, te traje una sorpresita.

[fanfarria]

[gime]
¿De qué me perdí?

[entre dientes] ¿Quién dijo eso?
No fue el burrito.

Princesa Fiona.

Yo he cumplido. Ahora entrégamelo.

Aquí tienes, ogro. Las escrituras de
tu pantano, liberado, como acordamos.

Tómalas y lárgate
antes de que cambie de opinión.

Perdóna, princesa, por sorprenderte,

pero tú me has sorprendido a mí,

ya que nunca había visto
tan radiante belleza.

Yo soy lord Farquaad.

¿Lord Farquaad? Oh. No.

Disculpeme, mi lord,
estaba dando un pequeño...

...adiós.

Eso es tan dulce.

No tienes que desperdiciar tus
buenos modales con el ogro.

Esa cosa ni sentimientos tiene.

No, tiene razón. No los tiene.

Princesa Fiona,
hermosa, bella, y radiante Fiona.

Te pido que te cases conmigo.

¿Quieres ser la novia perfecta
para el novio perfecto?

Lord Farquaad, sí acepto. Nada me haría...

¡Excelente, iniciaré los preparativos,
para casarnos mañana!

¡No! Es decir, ¿para qué esperar?

Vamos a casarnos hoy, antes de que anochezca.

Estamos ansiosos, está bien.

Cuanto antes, mejor. ¡Hay tanto que hacer!

Como el banquete,
el pastel, la banda, los invitados.

Capitán, ¡reúna algunos invitados!

Portaos<i/> bien, ogro.

Shrek, ¿qué te pasa?
¿Vas a dejar que te la bajen?

¿Sí? ¿Y qué?

Hay algo de ella que tú no sabes.

  Hablé con ella anoche y 
  Ya sé que hablaste con ella anoche.

Son buenos amigos, ¿verdad?

Si ya son tan buenos amigos,

¿por qué no te vas con ella?

Shrek, quiero ir contigo.

¿Tengo que repetírtelo?
No irás a mi casa conmigo

¡Vivo solo! ¡Es mi pantano! ¡Mío!
¡Y de nadie más!

¿Has entendido? ¡No lo compartiré!

¡Y menos con inútiles, patéticos
y latosos burros habladores!

Pero yo creí...

Sí. ¿Pues sabes qué?

¡Creíste mal!

Shrek.

[suena "Hallelujah"]

[gemidos]

[golpetazo]

¿Burro? ¿Qué estás haciendo?

¿Nunca oíste de la muralla china?
¿O el muro de Berlín?

Pues sí.

Pero el muro debería de rodear mi
pantano, no atravesarlo.

Está rodeando tu mitad.
Esa es tu mitad y esta es la mía.

Tu mitad, ¿eh?

Sí, mi mitad. Ayudé
a rescatar a la princesa.

Hice la mitad del trabajo,
la mitad del botín es mío.

Pásame la piedra esa
que se parece a tu cabeza.

¡Para atrás!

No, tú haste
pa'tras.

¡Este es mi pantano!

Nuestro pantano.

  Suéltala, Burro.
  Suéltala tú.

  ¡Asno testarudo!
  Ogro apestoso.

¡Bien!

Ey, ven pa'cá.
No he terminado contigo.

Pero, yo contigo sí.

Claro, eres como un yo yo.
YO YO YO.

¿Y qué crees? ¡Ahora voy yo!

¡Así que te callas y pon atención!

Siempre me insultas.

¡No aprecias lo que hago!

Me hechas de tu casa.
Me hechas la culpa.

¿Ah sí? Si te trato tan mal,
¿por qué siempre regresas?

¡Porque eso hacen los amigos!
¡Los amigos siempre se perdonan!

Sí. Tienes razón, Burro.

Te perdono... por
apuñalarme por la espalda!

[gemido] 'tás tan envuelto en tus
capas, cebollita,

que ocultas tus sentimientos.

[Shrek] ¡Lárgate!

¿Ves? Otra vez, la burra al trigo
lo mismo hicistes con Fiona.

La despreciastes, quizás hasta te amaba.

¿Me amaba? Dijo que era
una bestia desagradable y fea.

Los oí hablando.

No estaba hablando de ti.
Ella habla de ... alguien más.

¿Ella no hablaba de mí?

Pues, ¿de quién hablaba?

No voy a decirte nada.

No quieres escucharme, ¿verdad?

  ¡Burro!
  ¡No!

Está bien. Lo siento, ¿contento?

[suspiro]

Lo lamento.

Creo que sólo soy
un feo, estúpido y tonto ogro.

¿Puedes perdonarme?

Para eso son los amigos, ¿no?

Sí. ¿Amigos?

Amigos.

Entonces, ¿qué te dijo Fiona
sobre mí?

¿Pa' qué me preguntas a mí?
Ve a preguntárselo a ella.

¡La boda! Jamás llegaremos a tiempo.

[ríe]
No hay bronca.

El fin justifica los miedos
y yo ya le perdí el miedo.

[silbido]

¿Burro?

[Burro riendo] ¿Has oído hablar
de las cualidades de un burro?

[ríe]

  Ven acá, loco.
  'tá bien.

No te pongas cursi.
Ni digas más burradas.

Ahora, sube y agárrate juerte.

Aún no he le pongo
cinturones de seguridad.

[grito alegre]

[suenan las campanas de la iglesia]

[todos] ¡Ah!

Pueblo de Duloc...

" REVERENCIA "
" SILENCIO VENERADO "

...estamos aquí reunidos para atestiguar.

la unión de nuestro nuevo rey.

Disculpe.

¿Podemos pasar al "Sí, acepto"?

[ríe entre dientes]

Continue.

[gritos despavoridos]

Date una vuelta.

Si te necesito, te chiflo.
¿Sí, mi amor?

Shrek, ¡'perate!

  Hay que hacer las cosas bien.
  ¿De qué hablas?

Tienes que esperar a que

El obispo diga:
"que hable ahora o calle para siempre".

Y ahí dices: "¡Yo me opongo!".

¡No tengo tiempo para eso!

'perate. No seas necio ¡Escucha!

  Amas a esa mujer, ¿no?
  Sí.

  ¿Quieres abrazarla?
  Sí.

  ¿Complacerla?
  ¡Sí!

♪ 'tons dale, dale
toda tu ternura ♪

¡A las chavas les gusta lo cursi!

¡Está bien!
¿A qué hora dirá esa frase?

Hay que entrar a ver.

[quejido de Burro]

Y por el poder que se me ha...

[Shrek] ¿Qué estás viendo?

Todo el pueblo está ahí.

[sacerdote] Los declaro marido...

Está en el altar.

...y mujer, rey y reina.

¡Santa cacucha! Ya dijo la frase.

  Y yo aquí perdiendo el tiempo
  [golpazo]

¡Yo me opongo!

  ¿Shrek?
  [asombros]

¿Ahora qué quiere este?

[exclaman sorpresa]

¿Qué tal amigos?
¿Disfrutando la fiesta?

Me encanta Duloc, lindo pueblo.
muy limpio.

¿Qué estás haciendo aquí?

Ya bastante desagradable saber que
vives en un pantano

pero llegar a una boda
sin ser invitado...

¡Fiona!

Tengo que hablar contigo.

¿Ahora sí quieres hablar?

Es un poco tarde para eso,
así que, si me disculpas...

No puedes casarte con él.

¿Por qué no?

Porque... se casa contigo
sólo para poder ser rey.

¡Desgraciado! Fiona,
no le hagas caso.

No es tu amor verdadero.

¿Y tú qué sabes sobre el amor verdadero?

Bueno, yo...

[Farquaad] ¡Esto es de
antología!

¡El ogro se ha
enamorado de la princesa!

Que gracioso.

[todos ríen]

[Farquaad] ¡Un ogro y una princesa!

Shrek, ¿eso es cierto?

¿Qué más da? ¡Eso es absurdo!

Fiona, mi amor, estamos a un beso

de nuestro "y vivieron
muy felices" ¡Ahora bésame!

"De noche soy una,
pero de día soy otra".

Esto es de lo que
quería hablarte.

[exclamación de horror]

Vaya, eso explica muchas cosas.

[Farquaad] ¡Ah! ¡Que desagradable!

¡Guardias!

¡Les ordeno que desaparezcan
eso de mi vista! ¡Ahora!

  ¡Sáquenlos de aquí!
  ¡No!

[Farquaad] Ni con sus
Abracadabras

alterarán mis planes.
¡Esta boda se efectuará

y yo me convertiré en rey!

  ¡Suéltenme! ¡Shrek!
  ¡No!

[Farquaad] No se queden
ahí parados.

¡No me toquen! ¡Fiona!

[gruñe]

[Farquaad] Te haré lamentar
el día en que nos conocimos.

¡Te meteré en un zoológico!

¡Suplicarás la muerte para salvarte!

¡No! ¡Shrek!

En cuanto a ti, esposa mía...

¡Fiona!

...permanecerás en la
torre el resto de tus días!

¡Yo soy el rey!

[silbido]

¡Impondré el orden!
¡Todo será perfecto! Haré...

[gruñido]

[grito]

Muy bien. Que nadien se mueva.

Traigo un dragón, y no dudaré en usarlo.

¡Soy un burro sin mecate!

[eructo]

[Burro ríe]

Las bodas de los famosos,
nunca duran ¿o sí?

[algarabía]

Órale, Shrek.

¿Fiona?

¿Sí, Shrek?

Yo... Yo te amo.

¿De veras?

De veritas, de veritas.

Yo también te amo.

[enternecidos] ¡Ah!

[Fiona] "Hasta el
primer beso del verdadero amor

y, tomarás la forma
del amor verdadero".

[eco]

[eco] "Hasta el primer
beso del verdadero amor".

¿Fiona?

Fiona. ¿Te encuentras bien?

Sí.

Pero no lo entiendo.
Debería ser bonita.

Pero sí eres bonita.

[risa tímida]

Espero que este sea el final feliz.

[suena "I'm a believer"]

Les deseo suerte a todos.

[Burro] ¡Ahora todos!

♪ Then I saw her face ♪

♪ now I'm a believer ♪

¡Listen!

♪ Not a trace ♪

♪ of doubt in my mind ♪

♪ I'm in love ♪

♪ I'm a believer
I couldn't leave her if I tried ♪

♪ Then I saw her face ♪

♪ now I'm a believer ♪

♪ Not a trace ♪

♪ of doubt in my mind ♪

¡One more time!

♪ I'm in love, I'm a believer ♪

¡Come on!

♪ I believe, I believe ♪

♪ I believe, I believe ♪

¡Y'all sing with me!

♪ I believe ♪

  ♪ I believe ♪
  ♪ I believe ♪

¡The people in the back!

♪ I believe ♪

♪ I believe ♪

♪ I believe, I believe ♪

"Y VIVIERON FEOS PARA SIEMPRE
FIN. "

[risas]

¡Oh, that's funny!

[Burro] Se me jue el aire
Jue horrible, jue horrible.

[suena "Stay Home"]

`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)