// Mapping officiel multilingue des descriptions pour chaque upgrade Vacpack
function getVacpackDescription(upgrade) {
    const lang = (typeof currentLanguage !== 'undefined' ? currentLanguage : 'fr') || 'fr';
    const descMap = {
        fr: {
            1: "Synchronisez votre propre corps pour améliorer les systèmes de vie, et boostez votre barre de vie jusqu'à 150. En plus, ça brille.<br><b>Déblocage :</b> Disponible à l'achat au début du jeu.",
            2: "Un cardio-module encore plus avancé et encore plus brillant qui booste votre barre de vie jusque 200.<br><b>Déblocage :</b> 2 jours en jeu après avoir acheté le Cardio-Module.",
            3: "Le modèle dernier-cri en matière d'amplification de vie et de brillance, qui booste votre barre de vie jusque 250.<br><b>Déblocage :</b> 3 jours en jeu après avoir acheté le Cardio-Module Mk II.",
            4: "Un système d'amplification de vie expérimental qui pousse la technologie jusqu'à... la santé.<br><b>Déblocage :</b> Rang 21 du 7Zee, Montagne Infinie II.",
            5: "Ajoute un réservoir spécialisé qui vous permet de stocker de l'eau douce.<br><b>Déblocage :</b> Disponible à l'achat au début du jeu.",
            6: "Ayez la tête dans les nuages grâce à votre propre super jetpack !<br><b>Déblocage :</b> Disponible à l'achat au début du jeu.",
            7: "Un propulseur pour jetpack amélioré qui consomme 20 % d'énergie en moins, mais double le fun.<br><b>Déblocage :</b> 5 jours en jeu après avoir acheté le Jetpack.",
            8: "Ces bottes très avancées et, franchement, avant-gardistes réduisent l'énergie consommée lorsque vous courez.<br><b>Déblocage :</b> Jour 3.",
            9: "Des chaussures expérimentales capables de réduire encore plus le coût de sprint, et de vous pousser à dénigrer la marche.<br><b>Déblocage :</b> Rang 19 du 7Zee, Mangouste Dansante III.",
            10: "Ajoute un émetteur d'ondes de choc à votre aspipack qui repousse les slimes, lorsque vous vous sentez envahi(e).<br><b>Déblocage :</b> 0:00 au Jour 4.",
            11: "Améliore votre aspipack grâce à un générateur à microfusion probablement pas dangereux, qui booste votre barre d'énergie jusqu'à 150.<br><b>Déblocage :</b> Disponible à l'achat au début du jeu.",
            12: "Ce générateur à microfusion amélioré booste votre barre d'énergie jusqu'à 200, mais surtout, il est plus petit.<br><b>Déblocage :</b> 2 jours en jeu après avoir acheté le Noyau de Puissance.",
            13: "Le dernier générateur à microfusion amélioré qui booste votre barre d'énergie à 250, ce qui n'est pas assez pour vous pousser à arrêter le café.<br><b>Déblocage :</b> 3 jours en jeu après avoir acheté le Noyau de Puissance Mk II.",
            14: "Un nano-réservoir portable amélioré qui permet à votre réservoir de contenir 30 unités de ce que vous aspirez.<br><b>Déblocage :</b> Disponible à l'achat au début du jeu.",
            15: "Ces nano-réservoirs portables envoient valser toute prudence et vous permettent d'aspirer 40 unités dans chaque réservoir.<br><b>Déblocage :</b> 2 jours en jeu après avoir acheté le Amplificateur de Réservoir.",
            16: "Plus il y en a, mieux c'est, surtout dans ce cas. Ces nano-réservoirs premiums peuvent contenir 50 unités dans chaque réservoir.<br><b>Déblocage :</b> 3 jours en jeu après avoir acheté le Amplificateur de Réservoir Mk II.",
            17: "Le meilleur réservoir secret, doté d'une technologie de nano-réservoirs expérimentale qui est sûrement possiblement légale. Probablement.<br><b>Déblocage :</b> Rang 20 du 7Zee, Montagne Infinie I.",
            18: "Vous permet de déverrouiller une capsule au trésor de base.<br>L'Ouvre-Capsule vous permet d'ouvrir les Capsules Vertes ; <b>Déblocage :</b> Le Labo doit être déverrouillé et votre premier gadget fabriqué.",
            19: "Vous permet de déverrouiller une capsule au trésor avec une serrure plus avancée.<br>L'Ouvre-Capsule Mk II vous permet d'ouvrir les Capsules Bleues.<br><b>Déblocage :</b> Après l'achat de l'amélioration Mk I et 20 gadgets fabriqués dans Le Labo.",
            20: "Vous permet de déverrouiller les capsules au trésor les plus avancées.<br>L'Ouvre-Capsule Mk III vous permet d'ouvrir les Capsules Violettes.<br><b>Déblocage :</b> Après l'achat de l'amélioration Mk II et 50 gadgets fabriqués dans Le Labo.",
            21: "Une amélioration pour aspipack spéciale qui vise le point sensible d'un slime doré (son nombril secret ?) et triple le nombre de plortes dorés qu'il produit lorsqu'il est touché.<br><b>Déblocage :</b> Rang 22 du 7Zee, Montagne Infinie III.",
            22: "Une simple clé supplémentaire au cas où la dernière clé aurait été égarée !<br><b>Déblocage :</b> Disponible trois heures après avoir lu le dernier courrier de Casey."
        },
        en: {
                1: "Synchronize your own body to improve life systems and boost your health bar to 150. Plus, it glows.<br><b>Unlock:</b> Available for purchase at the start of the game.",
                2: "An even more advanced and shinier cardio module that boosts your health bar to 200.<br><b>Unlock:</b> 2 in-game days after buying the Cardio Module.",
                3: "The latest in life amplification and shininess, boosting your health bar to 250.<br><b>Unlock:</b> 3 in-game days after buying Cardio Module Mk II.",
                4: "An experimental life amplification system that pushes technology to... health.<br><b>Unlock:</b> 7Zee Rank 21, Infinite Mountain II.",
                5: "Adds a specialized tank that lets you store fresh water.<br><b>Unlock:</b> Available for purchase at the start of the game.",
                6: "Keep your head in the clouds with your very own super jetpack!<br><b>Unlock:</b> Available for purchase at the start of the game.",
                7: "An improved jetpack thruster that uses 20% less energy, but doubles the fun.<br><b>Unlock:</b> 5 in-game days after buying the Jetpack.",
                8: "These very advanced, frankly avant-garde boots reduce energy consumption when running.<br><b>Unlock:</b> Day 3.",
                9: "Experimental shoes that further reduce sprint cost and make you want to never walk again.<br><b>Unlock:</b> 7Zee Rank 19, Dancing Mongoose III.",
                10: "Adds a shockwave emitter to your vacpack that repels slimes when you feel overwhelmed.<br><b>Unlock:</b> 0:00 on Day 4.",
                11: "Upgrade your vacpack with a probably-not-dangerous microfusion generator, boosting your energy bar to 150.<br><b>Unlock:</b> Available for purchase at the start of the game.",
                12: "This improved microfusion generator boosts your energy bar to 200, and it's smaller too.<br><b>Unlock:</b> 2 in-game days after buying the Power Core.",
                13: "The latest improved microfusion generator boosts your energy bar to 250, which still isn't enough to make you quit coffee.<br><b>Unlock:</b> 3 in-game days after buying Power Core Mk II.",
                14: "An improved portable nano-tank lets your tank hold 30 units of whatever you vacuum.<br><b>Unlock:</b> Available for purchase at the start of the game.",
                15: "These portable nano-tanks throw caution to the wind and let you vacuum 40 units in each tank.<br><b>Unlock:</b> 2 in-game days after buying the Tank Booster.",
                16: "More is better, especially here. These premium nano-tanks can hold 50 units in each tank.<br><b>Unlock:</b> 3 in-game days after buying Tank Booster Mk II.",
                17: "The best secret tank, with experimental nano-tank technology that's probably possibly legal. Probably.<br><b>Unlock:</b> 7Zee Rank 20, Infinite Mountain I.",
                18: "Lets you unlock a basic treasure pod.<br>The Treasure Cracker lets you open Green Pods.<br><b>Unlock:</b> Lab must be unlocked and your first gadget crafted.",
                19: "Lets you unlock a treasure pod with a more advanced lock.<br>Treasure Cracker Mk II lets you open Blue Pods.<br><b>Unlock:</b> After buying Mk I and crafting 20 gadgets in the Lab.",
                20: "Lets you unlock the most advanced treasure pods.<br>Treasure Cracker Mk III lets you open Purple Pods.<br><b>Unlock:</b> After buying Mk II and crafting 50 gadgets in the Lab.",
                21: "A special Vacpack upgrade that targets the weak spot of a gold slime (its secret belly button?) and triples the number of gold plorts it produces when hit.<br><b>Unlock:</b> 7Zee Rank 22, Endless Mountain III.",
                22: "A simple extra key in case the last one was lost!<br><b>Unlock:</b> Available three hours after reading Casey's final mail."
            },
        es: {
                1: "Sincroniza tu propio cuerpo para mejorar los sistemas de vida y aumenta tu barra de salud hasta 150. Además, ¡brilla!<br><b>Desbloqueo:</b> Disponible para comprar al inicio del juego.",
                2: "Un cardio-módulo aún más avanzado y brillante que aumenta tu barra de salud hasta 200.<br><b>Desbloqueo:</b> 2 días en el juego después de comprar el Cardio-Módulo.",
                3: "El último modelo en amplificación de vida y brillo, que aumenta tu barra de salud hasta 250.<br><b>Desbloqueo:</b> 3 días en el juego después de comprar el Cardio-Módulo Mk II.",
                4: "Un sistema experimental de amplificación de vida que lleva la tecnología hasta... la salud.<br><b>Desbloqueo:</b> Rango 21 de 7Zee, Montaña Infinita II.",
                5: "Agrega un depósito especializado que te permite almacenar agua dulce.<br><b>Desbloqueo:</b> Disponible para comprar al inicio del juego.",
                6: "¡Mantén la cabeza en las nubes con tu propio super jetpack!<br><b>Desbloqueo:</b> Disponible para comprar al inicio del juego.",
                7: "Un propulsor mejorado para el jetpack que consume un 20% menos de energía, pero duplica la diversión.<br><b>Desbloqueo:</b> 5 días en el juego después de comprar el Jetpack.",
                8: "Estas botas muy avanzadas y, francamente, vanguardistas reducen el consumo de energía al correr.<br><b>Desbloqueo:</b> Día 3.",
                9: "Zapatos experimentales que reducen aún más el coste de sprint y te hacen despreciar caminar.<br><b>Desbloqueo:</b> Rango 19 de 7Zee, Mangosta Bailarina III.",
                10: "Agrega un emisor de ondas de choque a tu aspipack que repele slimes cuando te sientes abrumado.<br><b>Desbloqueo:</b> 0:00 en el Día 4.",
                11: "Mejora tu aspipack con un generador de microfusión probablemente no peligroso, que aumenta tu barra de energía hasta 150.<br><b>Desbloqueo:</b> Disponible para comprar al inicio del juego.",
                12: "Este generador de microfusión mejorado aumenta tu barra de energía hasta 200, y además es más pequeño.<br><b>Desbloqueo:</b> 2 días en el juego después de comprar el Núcleo de Energía.",
                13: "El último generador de microfusión mejorado aumenta tu barra de energía hasta 250, lo que no es suficiente para dejar el café.<br><b>Desbloqueo:</b> 3 días en el juego después de comprar el Núcleo de Energía Mk II.",
                14: "Un nano-depósito portátil mejorado permite que tu depósito contenga 30 unidades de lo que aspiras.<br><b>Desbloqueo:</b> Disponible para comprar al inicio del juego.",
                15: "Estos nano-depósitos portátiles dejan de lado la prudencia y te permiten aspirar 40 unidades en cada depósito.<br><b>Desbloqueo:</b> 2 días en el juego después de comprar el Amplificador de Depósito.",
                16: "Cuantos más, mejor, especialmente en este caso. Estos nano-depósitos premium pueden contener 50 unidades en cada depósito.<br><b>Desbloqueo:</b> 3 días en el juego después de comprar el Amplificador de Depósito Mk II.",
                17: "El mejor depósito secreto, con tecnología experimental de nano-depósitos que seguramente es posiblemente legal. Probablemente.<br><b>Desbloqueo:</b> Rango 20 de 7Zee, Montaña Infinita I.",
                18: "Te permite desbloquear una cápsula de tesoro básica.<br>El Abre-Cápsulas te permite abrir Cápsulas Verdes.<br><b>Desbloqueo:</b> El laboratorio debe estar desbloqueado y tu primer gadget fabricado.",
                19: "Te permite desbloquear una cápsula de tesoro con una cerradura más avanzada.<br>El Abre-Cápsulas Mk II te permite abrir Cápsulas Azules.<br><b>Desbloqueo:</b> Después de comprar la mejora Mk I y fabricar 20 gadgets en el laboratorio.",
                20: "Te permite desbloquear las cápsulas de tesoro más avanzadas.<br>El Abre-Cápsulas Mk III te permite abrir Cápsulas Moradas.<br><b>Desbloqueo:</b> Después de comprar la mejora Mk II y fabricar 50 gadgets en el laboratorio.",
                21: "Una mejora especial para el aspipack que apunta al punto débil de un slime dorado (¿su ombligo secreto?) y triplica la cantidad de plorts dorados que produce cuando es golpeado.<br><b>Desbloqueo:</b> Rango 22 de 7Zee, Montaña Infinita III.",
                22: "¡Una simple llave extra por si la última se perdió!<br><b>Desbloqueo:</b> Disponible tres horas después de leer el último correo de Casey."
            },
        }
    return descMap[lang] && descMap[lang][upgrade.id] ? descMap[lang][upgrade.id] : (descMap['fr'][upgrade.id] || '');
}

// Mapping officiel multilingue des descriptions pour chaque recette
function getRecipeDescription(recipe) {
    const lang = (typeof currentLanguage !== 'undefined' ? currentLanguage : 'fr') || 'fr';
    const descMap = {
        fr: {
            2: "Ajoute un réservoir spécialisé qui vous permet de stocker de l'eau douce.<br><b>Déblocage :</b> Disponible à l'achat au début du jeu.",
            3: "Ayez la tête dans les nuages grâce à votre propre super jetpack !<br><b>Déblocage :</b> Disponible à l'achat au début du jeu.",
            4: "Un propulseur pour jetpack amélioré qui consomme 20 % d'énergie en moins, mais double le fun.<br><b>Déblocage :</b> 5 jours en jeu après avoir acheté le Jetpack.",
            5: "Ces bottes très avancées et, franchement, avant-gardistes réduisent l'énergie consommée lorsque vous courez.<br><b>Déblocage :</b> Jour 3.",
            6: "Des chaussures expérimentales capables de réduire encore plus le coût de sprint, et de vous pousser à dénigrer la marche.<br><b>Déblocage :</b> Rang 19 du 7Zee, Mangouste Dansante III.",
            7: "Ajoute un émetteur d'ondes de choc à votre aspipack qui repousse les slimes, lorsque vous vous sentez envahi(e).<br><b>Déblocage :</b> 0:00 au Jour 4.",
            8: "Synchronisez votre propre corps pour améliorer les systèmes de vie, et boostez votre barre de vie jusqu'à 150. En plus, ça brille.<br><b>Déblocage :</b> Disponible à l'achat au début du jeu.",
            9: "Un cardio-module encore plus avancé et encore plus brillant qui booste votre barre de vie jusque 200.<br><b>Déblocage :</b> 2 jours en jeu après avoir acheté le Cardio-Module.",
            10: "Le modèle dernier-cri en matière d'amplification de vie et de brillance, qui booste votre barre de vie jusque 250.<br><b>Déblocage :</b> 3 jours en jeu après avoir acheté le Cardio-Module Mk II.",
            11: "Un système d'amplification de vie expérimental qui pousse la technologie jusqu'à... la santé.<br><b>Déblocage :</b> Rang 21 du 7Zee, Montagne Infinie II.",
            12: "Améliore votre aspipack grâce à un générateur à microfusion probablement pas dangereux, qui booste votre barre d'énergie jusqu'à 150.<br><b>Déblocage :</b> Disponible à l'achat au début du jeu.",
            13: "Ce générateur à microfusion amélioré booste votre barre d'énergie jusqu'à 200, mais surtout, il est plus petit.<br><b>Déblocage :</b> 2 jours en jeu après avoir acheté le Noyau de Puissance.",
            14: "Le dernier générateur à microfusion amélioré qui booste votre barre d'énergie à 250, ce qui n'est pas assez pour vous pousser à arrêter le café.<br><b>Déblocage :</b> 3 jours en jeu après avoir acheté le Noyau de Puissance Mk II.",
            15: "Un nano-réservoir portable amélioré qui permet à votre réservoir de contenir 30 unités de ce que vous aspirez.<br><b>Déblocage :</b> Disponible à l'achat au début du jeu.",
            16: "Ces nano-réservoirs portables envoient valser toute prudence et vous permettent d'aspirer 40 unités dans chaque réservoir.<br><b>Déblocage :</b> 2 jours en jeu après avoir acheté le Amplificateur de Réservoir.",
            17: "Plus il y en a, mieux c'est, surtout dans ce cas. Ces nano-réservoirs premiums peuvent contenir 50 unités dans chaque réservoir.<br><b>Déblocage :</b> 3 jours en jeu après avoir acheté le Amplificateur de Réservoir Mk II.",
            18: "Le meilleur réservoir secret, doté d'une technologie de nano-réservoirs expérimentale qui est sûrement possiblement légale. Probablement.<br><b>Déblocage :</b> Rang 20 du 7Zee, Montagne Infinie I.",
            19: "Vous permet de déverrouiller une capsule au trésor de base.<br>L'Ouvre-Capsule vous permet d'ouvrir les Capsules Vertes ; il deviendra disponible une fois que Le Labo sera déverrouillé et que votre premier gadget aura été fabriqué.",
            20: "Vous permet de déverrouiller une capsule au trésor avec une serrure plus avancée.<br>L'Ouvre-Capsule Mk II vous permet d'ouvrir les Capsules Bleues et deviendra disponible après l'achat de l'amélioration Mk I ainsi qu'un total de 20 gadgets fabriqués dans Le Labo.",
            21: "Vous permet de déverrouiller les capsules au trésor les plus avancées.<br>L'Ouvre-Capsule Mk III vous permet d'ouvrir les Capsules Violettes et devient disponible après l'achat de l'amélioration Mk II ainsi qu'un total de 50 gadgets fabriqués dans Le Labo.",
            22: "Une amélioration pour aspipack spéciale qui vise le point sensible d'un slime doré (son nombril secret ?) et triple le nombre de plortes dorés qu'il produit lorsqu'il est touché.<br><b>Déblocage :</b> Rang 22 du 7Zee, Montagne Infinie III.",
            23: "Une simple clé supplémentaire au cas où la dernière clé aurait été égarée !<br><b>Déblocage :</b> Il devient disponible trois heures dans le jeu après avoir lu le dernier courrier de Casey."
    },
    en: {
            2: "Adds a specialized tank that lets you store fresh water.<br><b>Unlock:</b> Available for purchase at the start of the game.",
            3: "Keep your head in the clouds with your very own super jetpack!<br><b>Unlock:</b> Available for purchase at the start of the game.",
            4: "An improved jetpack thruster that uses 20% less energy, but doubles the fun.<br><b>Unlock:</b> 5 in-game days after buying the Jetpack.",
            5: "These very advanced, frankly avant-garde boots reduce energy consumption when running.<br><b>Unlock:</b> Day 3.",
            6: "Experimental shoes that further reduce sprint cost and make you want to never walk again.<br><b>Unlock:</b> 7Zee Rank 19, Dancing Mongoose III.",
            7: "Adds a shockwave emitter to your vacpack that repels slimes when you feel overwhelmed.<br><b>Unlock:</b> 0:00 on Day 4.",
            8: "Synchronize your own body to improve life systems and boost your health bar to 150. Plus, it glows.<br><b>Unlock:</b> Available for purchase at the start of the game.",
            9: "An even more advanced and shinier cardio module that boosts your health bar to 200.<br><b>Unlock:</b> 2 in-game days after buying the Cardio Module.",
            10: "The latest in life amplification and shininess, boosting your health bar to 250.<br><b>Unlock:</b> 3 in-game days after buying Cardio Module Mk II.",
            11: "An experimental life amplification system that pushes technology to... health.<br><b>Unlock:</b> 7Zee Rank 21, Infinite Mountain II.",
            12: "Upgrade your vacpack with a probably-not-dangerous microfusion generator, boosting your energy bar to 150.<br><b>Unlock:</b> Available for purchase at the start of the game.",
            13: "This improved microfusion generator boosts your energy bar to 200, and it's smaller too.<br><b>Unlock:</b> 2 in-game days after buying the Power Core.",
            14: "The latest improved microfusion generator boosts your energy bar to 250, which still isn't enough to make you quit coffee.<br><b>Unlock:</b> 3 in-game days after buying Power Core Mk II.",
            15: "An improved portable nano-tank lets your tank hold 30 units of whatever you vacuum.<br><b>Unlock:</b> Available for purchase at the start of the game.",
            16: "These portable nano-tanks throw caution to the wind and let you vacuum 40 units in each tank.<br><b>Unlock:</b> 2 in-game days after buying the Tank Booster.",
            17: "More is better, especially here. These premium nano-tanks can hold 50 units in each tank.<br><b>Unlock:</b> 3 in-game days after buying Tank Booster Mk II.",
            18: "The best secret tank, with experimental nano-tank technology that's probably possibly legal. Probably.<br><b>Unlock:</b> 7Zee Rank 20, Infinite Mountain I.",
            19: "Lets you unlock a basic treasure pod.<br>The Treasure Cracker lets you open Green Pods; it becomes available once the Lab is unlocked and your first gadget is crafted.",
            20: "Lets you unlock a treasure pod with a more advanced lock.<br>Treasure Cracker Mk II lets you open Blue Pods and becomes available after buying Mk I and crafting a total of 20 gadgets in the Lab.",
            21: "Lets you unlock the most advanced treasure pods.<br>Treasure Cracker Mk III lets you open Purple Pods and becomes available after buying Mk II and crafting a total of 50 gadgets in the Lab.",
            22: "A special vacpack upgrade that targets the secret belly button of a gold slime and triples the number of gold plorts it produces when hit.<br><b>Unlock:</b> 7Zee Rank 22, Infinite Mountain III.",
            23: "A simple extra key in case the last one was lost!<br><b>Unlock:</b> Becomes available three hours into the game after reading Casey's last mail."
    },
    es: {
            2: "Agrega un depósito especializado que te permite almacenar agua dulce.<br><b>Desbloqueo:</b> Disponible para comprar al inicio del juego.",
            3: "¡Mantén la cabeza en las nubes con tu propio super jetpack!<br><b>Desbloqueo:</b> Disponible para comprar al inicio del juego.",
            4: "Un propulsor mejorado para el jetpack que consume un 20% menos de energía, pero duplica la diversión.<br><b>Desbloqueo:</b> 5 días en el juego después de comprar el Jetpack.",
            5: "Estas botas muy avanzadas y, francamente, vanguardistas reducen el consumo de energía al correr.<br><b>Desbloqueo:</b> Día 3.",
            6: "Zapatos experimentales que reducen aún más el coste de sprint y te hacen despreciar caminar.<br><b>Desbloqueo:</b> Rango 19 de 7Zee, Mangosta Bailarina III.",
            7: "Agrega un emisor de ondas de choque a tu aspipack que repele slimes cuando te sientes abrumado.<br><b>Desbloqueo:</b> 0:00 en el Día 4.",
            8: "Sincroniza tu propio cuerpo para mejorar los sistemas de vida y aumenta tu barra de salud hasta 150. Además, ¡brilla!<br><b>Desbloqueo:</b> Disponible para comprar al inicio del juego.",
            9: "Un cardio-módulo aún más avanzado y brillante que aumenta tu barra de salud hasta 200.<br><b>Desbloqueo:</b> 2 días en el juego después de comprar el Cardio-Módulo.",
            10: "El último modelo en amplificación de vida y brillo, que aumenta tu barra de salud hasta 250.<br><b>Desbloqueo:</b> 3 días en el juego después de comprar el Cardio-Módulo Mk II.",
            11: "Un sistema experimental de amplificación de vida que lleva la tecnología hasta... la salud.<br><b>Desbloqueo:</b> Rango 21 de 7Zee, Montaña Infinita II.",
            12: "Mejora tu aspipack con un generador de microfusión probablemente no peligroso, que aumenta tu barra de energía hasta 150.<br><b>Desbloqueo:</b> Disponible para comprar al inicio del juego.",
            13: "Este generador de microfusión mejorado aumenta tu barra de energía hasta 200, y además es más pequeño.<br><b>Desbloqueo:</b> 2 días en el juego después de comprar el Núcleo de Energía.",
            14: "El último generador de microfusión mejorado aumenta tu barra de energía hasta 250, lo que no es suficiente para dejar el café.<br><b>Desbloqueo:</b> 3 días en el juego después de comprar el Núcleo de Energía Mk II.",
            15: "Un nano-depósito portátil mejorado permite que tu depósito contenga 30 unidades de lo que aspiras.<br><b>Desbloqueo:</b> Disponible para comprar al inicio del juego.",
            16: "Estos nano-depósitos portátiles dejan de lado la prudencia y te permiten aspirar 40 unidades en cada depósito.<br><b>Desbloqueo:</b> 2 días en el juego después de comprar el Amplificador de Depósito.",
            17: "Cuantos más, mejor, especialmente en este caso. Estos nano-depósitos premium pueden contener 50 unidades en cada depósito.<br><b>Desbloqueo:</b> 3 días en el juego después de comprar el Amplificador de Depósito Mk II.",
            18: "El mejor depósito secreto, con tecnología experimental de nano-depósitos que seguramente es posiblemente legal. Probablemente.<br><b>Desbloqueo:</b> Rango 20 de 7Zee, Montaña Infinita I.",
            19: "Te permite desbloquear una cápsula del tesoro básica.<br>El Abre-Cápsulas te permite abrir Cápsulas Verdes; estará disponible una vez que el Laboratorio esté desbloqueado y tu primer gadget haya sido fabricado.",
            20: "Te permite desbloquear una cápsula del tesoro con una cerradura más avanzada.<br>El Abre-Cápsulas Mk II te permite abrir Cápsulas Azules y estará disponible después de comprar la mejora Mk I y fabricar un total de 20 gadgets en el Laboratorio.",
            21: "Te permite desbloquear las cápsulas del tesoro más avanzadas.<br>El Abre-Cápsulas Mk III te permite abrir Cápsulas Moradas y estará disponible después de comprar la mejora Mk II y fabricar un total de 50 gadgets en el Laboratorio.",
            22: "Una mejora especial para aspipack que apunta al ombligo secreto de un slime dorado y triplica la cantidad de plortes dorados que produce cuando es golpeado.<br><b>Desbloqueo:</b> Rango 22 de 7Zee, Montaña Infinita III.",
            23: "¡Una simple llave extra por si la última se perdió!<br><b>Desbloqueo:</b> Disponible tres horas en el juego después de leer el último correo de Casey."
        }
    };
    return descMap[lang] && descMap[lang][recipe.id] ? descMap[lang][recipe.id] : (descMap['fr'][recipe.id] || '');
}
let currentUser = null;
let userData = {
    refineryDeposits: {}, 
    purchasedRecipes: [],
    favoriteRecipes: [],
    favoriteUpgrades: [],
    favoriteZones: [],
    favoriteDlcs: [],
    currentMoney: 0,
    currentTier: 0,
    purchasedClubTiers: [], 
    ownedDlcs: [], 
    purchasedVacpackUpgrades: [], 
    ownedZones: ['ranch'] 
};

let autoSaveInterval = null;
let lastSaveTime = Date.now();
let hasUnsavedChanges = false;
// Vacpack filter/sort state (declared early so URL navigation can set them)
let vacpackFilter = 'all';
let vacpackSort = 'default';


function formatPrice(priceUSD) {
    if (priceUSD === 0) {
        return t('free');
    }
    
    
    if (typeof cacheManager !== 'undefined' && cacheManager.convertPrice) {
        return cacheManager.convertPrice(priceUSD);
    }
    
    
    return `${priceUSD.toLocaleString()} $`;
}


function hasEnoughResources(ingredients) {
    for (let ingredient of ingredients) {
        const match = ingredient.match(/(.+?)\s*x(\d+)/);
        if (match) {
            const itemName = match[1].trim();
            const required = parseInt(match[2]);
            const available = userData.refineryDeposits[itemName] || 0;
            
            if (available < required) {
                return false;
            }
        }
    }
    return true;
}

function getResourcesPercentage(ingredients) {
    if (!ingredients || ingredients.length === 0) return 100;
    
    let totalRequired = 0;
    let totalAvailable = 0;
    
    for (let ingredient of ingredients) {
        const match = ingredient.match(/(.+?)\s*x(\d+)/);
        if (match) {
            const itemName = match[1].trim();
            const required = parseInt(match[2]);
            const available = userData.refineryDeposits[itemName] || 0;
            
            totalRequired += required;
            totalAvailable += Math.min(available, required);
        }
    }
    
    if (totalRequired === 0) return 100;
    return Math.round((totalAvailable / totalRequired) * 100);
}

function getGradientByPercentage(percentage) {
    if (percentage >= 100) {
        return 'linear-gradient(135deg, #51cf66 0%, #40c057 100%)';
    } else if (percentage >= 75) {
        return 'linear-gradient(135deg, #94d82d 0%, #51cf66 100%)';
    } else if (percentage >= 50) {
        return 'linear-gradient(135deg, #8a2be2 0%, #fab005 100%)';
    } else if (percentage >= 25) {
        return 'linear-gradient(135deg, #ff922b 0%, #fd7e14 100%)';
    } else {
        return 'linear-gradient(135deg, #ff6b6b 0%, #e53e3e 100%)';
    }
}


function setupAutocomplete() {
    
    return;
}


function updateLanguageFlags() {
    document.querySelectorAll('.flag-btn').forEach(btn => {
        if (btn.dataset.lang === currentLanguage) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}


auth.onAuthStateChanged(async user => {
    if (user) {
        currentUser = user;
        document.getElementById('auth-container').style.display = 'none';
        document.getElementById('app-container').style.display = 'block';
        
        
        updateLanguageFlags();
        
        
        await loadUserData();
        updatePageTranslations();
        setupAutocomplete();
        
        
        startAutoSave();
        
        
        handleURLNavigation();
    } else {
        currentUser = null;
        document.getElementById('auth-container').style.display = 'flex';
        document.getElementById('app-container').style.display = 'none';
        
        
        if (autoSaveInterval) {
            clearInterval(autoSaveInterval);
            autoSaveInterval = null;
        }
        
        
        updateLanguageFlags();
        
        updatePageTranslations();
    }
});



function showLogin() {
    document.getElementById('login-section').style.display = 'block';
    document.getElementById('register-section').style.display = 'none';
}

function showRegister() {
    document.getElementById('login-section').style.display = 'none';
    document.getElementById('register-section').style.display = 'block';
}


async function loginWithEmail() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    
    if (!email || !password) {
        console.error(t('fillAllFields'));
        showError(t('fillAllFields'));
        return;
    }
    
    try {
        await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
        console.error(`${t('loginError')} ${error.message}`);
        showError(`${t('loginError')} ${error.message}`);
    }
}


async function registerWithEmail() {
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    
    if (!email || !password) {
        console.error(t('fillAllFields'));
        showError(t('fillAllFields'));
        return;
    }
    
    if (password.length < 6) {
        console.error(t('passwordLength'));
        showError(t('passwordLength'));
        return;
    }
    
    try {
        await auth.createUserWithEmailAndPassword(email, password);
    } catch (error) {
        console.error(`${t('registerError')} ${error.message}`);
        showError(`${t('registerError')} ${error.message}`);
    }
}

async function loginWithGoogle() {
    try {
        await auth.signInWithPopup(googleProvider);
    } catch (error) {
        console.error(`${t('googleError')}: ${error.message}`);
        showError(t('googleError') + ' ' + error.message);
    }
}

async function logout() {
    const confirmed = await showConfirmDialog({
        title: t('confirmLogout') || 'Déconnexion',
        message: t('confirmLogoutMessage') || 'Voulez-vous vraiment vous déconnecter ?',
        confirmText: t('logout') || 'Déconnexion',
        cancelText: t('cancel') || 'Annuler',
        isDanger: true,
        icon: '🚪'
    });
    
    if (confirmed) {
        await auth.signOut();
    }
}





function showSection(sectionName) {
    // Réinitialiser le scroll à 0 lors du changement de section
    window.scrollTo(0, 0);

    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });

    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    const section = document.getElementById(`${sectionName}-section`);
    if (section) {
        section.classList.add('active');
    }

    const navBtn = document.querySelector(`[onclick="showSection('${sectionName}')"]`);
    if (navBtn) {
        navBtn.classList.add('active');
    }

    if (sectionName === 'refinery') {
        displayRefineryDeposits();
    } else if (sectionName === 'recipes') {
        displayRecipes(currentFilter);
    } else if (sectionName === 'vacpack') {
        displayVacpackUpgrades();
    } else if (sectionName === 'club7zee') {
        displayClubRewards();
    } else if (sectionName === 'zones') {
        displayZones();
    } else if (sectionName === 'dlcs') {
        displayDlcs();
    } else if (sectionName === 'favorites') {
        displayFavorites();
    }
    // Nettoyer les filtres de l'URL selon la section
    const url = new URL(window.location.href);
    url.hash = sectionName;
    // Toujours supprimer tous les filtres non pertinents
    url.searchParams.delete('recipeFilter');
    url.searchParams.delete('refineryFilter');
    url.searchParams.delete('vacpackFilter');
    url.searchParams.delete('sort');

    if (sectionName === 'recipes') {
        url.searchParams.set('recipeFilter', currentFilter || 'all');
        url.searchParams.set('sort', currentSort || 'default');
    }
    window.history.replaceState({}, '', url);
    closeMobileMenu();
}


function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    const burgerMenu = document.querySelector('.burger-menu');
    
    navLinks.classList.toggle('active');
    burgerMenu.classList.toggle('active');
}

function closeMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    const burgerMenu = document.querySelector('.burger-menu');
    
    navLinks.classList.remove('active');
    burgerMenu.classList.remove('active');
}


function handleURLNavigation() {
    const hash = window.location.hash.substring(1);
    const validSections = ['refinery', 'recipes', 'vacpack', 'club7zee', 'zones', 'dlcs', 'favorites'];
    
    
    const urlParams = new URLSearchParams(window.location.search);
    const refineryFilter = urlParams.get('refineryFilter') || 'all';
    const recipeFilter = urlParams.get('recipeFilter') || 'all';
    const recipeSort = urlParams.get('sort') || 'default';
    
    if (hash && validSections.includes(hash)) {
        showSection(hash);

        if (hash === 'refinery') {
            currentRefineryFilter = refineryFilter;
            currentRefinerySort = recipeSort;
            updateFilterButtons('refinery', refineryFilter);
            updateRefinerySortDropdown(currentRefinerySort);
            displayRefineryDeposits();
        } else if (hash === 'recipes') {
            currentFilter = recipeFilter;
            currentSort = recipeSort;
            updateFilterButtons('recipes', recipeFilter);
            updateSortDropdown(recipeSort);
            displayRecipes(recipeFilter);
        } else if (hash === 'vacpack') {
            // read vacpack filter and sort from URL
            vacpackFilter = urlParams.get('vacpackFilter') || 'all';
            vacpackSort = urlParams.get('sort') || 'default';
            // update UI
            document.querySelectorAll('#vacpack-section .filter-btn').forEach(btn => btn.classList.remove('active'));
            const activeBtn = document.querySelector(`#vacpack-section .filter-btn[onclick="filterVacpack('${vacpackFilter}')"]`);
            if (activeBtn) activeBtn.classList.add('active');
            const sortSelect = document.getElementById('vacpack-sort');
            if (sortSelect) sortSelect.value = vacpackSort;
            displayVacpackUpgrades();
        } else if (hash === 'club7zee') {
            displayClubRewards();
        } else if (hash === 'zones') {
            displayZones();
        } else if (hash === 'dlcs') {
            displayDlcs();
        } else if (hash === 'favorites') {
            displayFavorites();
        }
    } else {
        showSection('refinery');
    }
}

function updateSortDropdown(sortValue) {
    const sortSelect = document.getElementById('recipe-sort');
    if (sortSelect) {
        sortSelect.value = sortValue;
    }
}

function updateRefinerySortDropdown(sortValue) {
    const sortSelect = document.getElementById('refinery-sort');
    if (sortSelect) {
        sortSelect.value = sortValue;
    }
}


function updateFilterButtons(section, activeFilter) {
    const sectionElement = document.getElementById(`${section}-section`);
    if (sectionElement) {
        sectionElement.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        
        const selector = section === 'refinery' 
            ? `[onclick="filterRefinery('${activeFilter}')"]`
            : `[onclick="filterRecipes('${activeFilter}')"]`;
        const activeBtn = sectionElement.querySelector(selector);
        if (activeBtn) {
            activeBtn.classList.add('active');
        }
    }
}


window.addEventListener('hashchange', handleURLNavigation);


window.addEventListener('DOMContentLoaded', () => {
    
    const urlParams = new URLSearchParams(window.location.search);
    let langParam = urlParams.get('lang');
    
    if (!langParam || !['fr', 'en', 'es'].includes(langParam)) {
        langParam = 'fr';
    }
    
    changeLanguage(langParam, true);
    
    
    handleURLNavigation();
});




async function loadUserData() {
    if (!currentUser) return;
    
    try {
        const doc = await db.collection('users').doc(currentUser.uid).get();
        if (doc.exists) {
            userData = { ...userData, ...doc.data() };
            
            
            if (Array.isArray(userData.refineryDeposits)) {
                userData.refineryDeposits = {};
            }
            
            
            if (!userData.purchasedClubTiers) {
                userData.purchasedClubTiers = [];
            }
            
            
            if (!userData.ownedZones) {
                userData.ownedZones = ['ranch'];
            } else if (!userData.ownedZones.includes('ranch')) {
                
                userData.ownedZones.push('ranch');
            }
            
            
            if (!userData.purchasedRecipes) {
                userData.purchasedRecipes = [];
            }
            
            
            if (!userData.purchasedVacpackUpgrades) {
                userData.purchasedVacpackUpgrades = [];
            }
            
            
            if (!userData.ownedDlcs) {
                userData.ownedDlcs = [];
            }
            
            if (!userData.favoriteRecipes) {
                userData.favoriteRecipes = [];
            }
            if (!userData.favoriteUpgrades) {
                userData.favoriteUpgrades = [];
            }
            if (!userData.favoriteZones) {
                userData.favoriteZones = [];
            }
            if (!userData.favoriteDlcs) {
                userData.favoriteDlcs = [];
            }
            
        } else {
            console.log('No existing user data, starting fresh');
            
            
            userData.ownedZones = ['ranch'];
            userData.purchasedRecipes = [];
            userData.purchasedVacpackUpgrades = [];
            userData.ownedDlcs = [];
        }
        
        
        displayRefineryDeposits();
        displayRecipes();
        displayVacpackUpgrades();
        displayFavorites();
        displayClubRewards();
        displayDlcs();
        displayZones();
        
    } catch (error) {
    console.error(`${t('loadError')} ${error.message}`);
    showError(`${t('loadError')} ${error.message}`);
    }
}

async function saveUserData(showMessage = false) {
    if (!currentUser) return;
    
    try {
        await db.collection('users').doc(currentUser.uid).set(userData);
        lastSaveTime = Date.now();
        hasUnsavedChanges = false;
        console.log(t('dataSaved'));
        
        
        if (showMessage) {
            showSaveConfirmation();
        }
    } catch (error) {
    console.error(`${t('saveError')}: ${error.message}`);
    showError(`${t('saveError')} ${error.message}`);
    }
}


function markAsChanged() {
    hasUnsavedChanges = true;
}


function startAutoSave() {
    if (autoSaveInterval) {
        clearInterval(autoSaveInterval);
    }
    
    autoSaveInterval = setInterval(async () => {
        if (hasUnsavedChanges && currentUser) {
            await saveUserData();
            
            if (!hasUnsavedChanges) {
                showSaveConfirmation();
            }
        }
    }, 2000);
}


function showSaveConfirmation() {
    showSuccess(t('dataSaved') || 'Données enregistrées');
}





let currentRefineryFilter = 'all';
let currentRefinerySort = 'default';

// Initialiser currentRefineryFilter depuis l'URL au chargement
const initialRefineryUrlParams = new URLSearchParams(window.location.search);
if (initialRefineryUrlParams.get('refineryFilter')) {
    currentRefineryFilter = initialRefineryUrlParams.get('refineryFilter');
}
if (initialRefineryUrlParams.get('sort')) {
    currentRefinerySort = initialRefineryUrlParams.get('sort');
}

function displayRefineryDeposits() {
    const container = document.getElementById('refinery-grid');
    if (!container) return;
    
    const labWarning = document.getElementById('lab-warning-refinery');
    const labAccess = hasLabAccess();
    
    if (labWarning) {
        labWarning.style.display = labAccess ? 'none' : 'block';
    }
    
    ALL_RESOURCES.forEach(resource => {
        if (!(resource in userData.refineryDeposits)) {
            userData.refineryDeposits[resource] = 0;
        }
    });
    
    const lang = currentLanguage || 'en';
    
    let resourcesToDisplay = ALL_RESOURCES;
    // Filtrage désactivé : toujours afficher tout

    // Tri selon currentRefinerySort
    if (currentRefinerySort === 'name-asc') {
        resourcesToDisplay = [...resourcesToDisplay].sort((a, b) => {
            const nameA = ALL_RESOURCES_TRANSLATIONS[a]?.[lang] || a;
            const nameB = ALL_RESOURCES_TRANSLATIONS[b]?.[lang] || b;
            return nameA.localeCompare(nameB);
        });
    } else if (currentRefinerySort === 'name-desc') {
        resourcesToDisplay = [...resourcesToDisplay].sort((a, b) => {
            const nameA = ALL_RESOURCES_TRANSLATIONS[a]?.[lang] || a;
            const nameB = ALL_RESOURCES_TRANSLATIONS[b]?.[lang] || b;
            return nameB.localeCompare(nameA);
        });
    } else if (currentRefinerySort === 'quantity-asc') {
        resourcesToDisplay = [...resourcesToDisplay].sort((a, b) => {
            return (userData.refineryDeposits[a] || 0) - (userData.refineryDeposits[b] || 0);
        });
    } else if (currentRefinerySort === 'quantity-desc') {
        resourcesToDisplay = [...resourcesToDisplay].sort((a, b) => {
            return (userData.refineryDeposits[b] || 0) - (userData.refineryDeposits[a] || 0);
        });
    }
    
    container.innerHTML = resourcesToDisplay.map(resource => {
        const translatedName = ALL_RESOURCES_TRANSLATIONS[resource] 
            ? ALL_RESOURCES_TRANSLATIONS[resource][lang] 
            : resource;
        
        const isLocked = !labAccess;
            
        return `
        <div class="refinery-resource-card ${isLocked ? 'locked' : ''}">
            ${isLocked ? '<div class="locked-overlay">🔒</div>' : ''}
            <div class="resource-image">
                <img loading="lazy" src="assets/resources/${resource.toLowerCase().replace(/\s+/g, '_')}.png" 
                     alt="${translatedName}"
                     onerror="this.parentElement.innerHTML='🔬'">
            </div>
            <div class="resource-name-display">${translatedName}</div>
            <div class="resource-controls">
                <input type="number" 
                       class="resource-qty-input"
                       id="refinery-${resource.replace(/\s+/g, '_')}" 
                       value="${userData.refineryDeposits[resource] || 0}" 
                       min="0"
                       ${isLocked ? 'disabled' : ''}
                       onchange="${isLocked ? 'return false;' : `updateRefineryQuantity('${resource}', this.value)`}">
                <button class="resource-btn-reset" ${isLocked ? 'disabled' : ''} onclick="${isLocked ? 'return false;' : `updateRefineryQuantity('${resource}', 0)`}" title="Remettre à zéro">⟲</button>
                <div class="resource-controls-buttons">
                    <button class="resource-btn-minus-10 ${isLocked ? 'disabled' : ''}" 
                            onclick="${isLocked ? 'return false;' : `adjustRefineryQuantity('${resource}', -10)`}"
                            ${isLocked ? 'disabled' : ''}
                            title="-10">−10</button>
                    <button class="resource-btn-minus ${isLocked ? 'disabled' : ''}" 
                            onclick="${isLocked ? 'return false;' : `adjustRefineryQuantity('${resource}', -1)`}"
                            ${isLocked ? 'disabled' : ''}>−</button>
                    <button class="resource-btn-plus ${isLocked ? 'disabled' : ''}" 
                            onclick="${isLocked ? 'return false;' : `adjustRefineryQuantity('${resource}', 1)`}"
                            ${isLocked ? 'disabled' : ''}>+</button>
                    <button class="resource-btn-plus-10 ${isLocked ? 'disabled' : ''}" 
                            onclick="${isLocked ? 'return false;' : `adjustRefineryQuantity('${resource}', 10)`}"
                            ${isLocked ? 'disabled' : ''}
                            title="+10">+10</button>
                </div>
            </div>
        </div>`;
    }).join('');
}


function filterRefinery(category) {
    // Filtrage désactivé
    return;
}


function adjustRefineryQuantity(resourceName, delta) {
    const currentValue = userData.refineryDeposits[resourceName] || 0;
    const newValue = Math.max(0, currentValue + delta);
    userData.refineryDeposits[resourceName] = newValue;
    
    
    const input = document.getElementById(`refinery-${resourceName.replace(/\s+/g, '_')}`);
    if (input) {
        input.value = newValue;
    }
    
    
    markAsChanged();
}


function updateRefineryQuantity(resourceName, quantity) {
    userData.refineryDeposits[resourceName] = parseInt(quantity) || 0;
    // Mettre à jour immédiatement l'input correspondant si présent
    const input = document.getElementById(`refinery-${resourceName.replace(/\s+/g, '_')}`);
    if (input) {
        input.value = userData.refineryDeposits[resourceName];
    }
    markAsChanged();
    displayRecipes();
    // Sauvegarder immédiatement et afficher la notif via le container
    saveUserData(true);
}


let saveTimeout;


async function saveAllRefineryDeposits() {
    await saveUserData();
    showSuccess(t('dataSaved'));
    displayRecipes();
}



async function toggleRecipePurchase(recipeId) {
    const recipe = RECIPES_DATA.find(r => r.id === recipeId);
    
    
    // On peut retirer les gratuits aussi, donc on retire la restriction
    
    const index = userData.purchasedRecipes.indexOf(recipeId);
    if (index >= 0) {
        userData.purchasedRecipes.splice(index, 1);
        showInfo(t('recipeRemoved') || 'Recette retirée');
    } else {
        userData.purchasedRecipes.push(recipeId);
        showSuccess(t('recipePurchased') || 'Recette achetée');
    }
    
    markAsChanged();
    await saveUserData();
    displayRecipes(currentFilter);
}

async function toggleRecipeFavorite(recipeId) {
    const index = userData.favoriteRecipes.indexOf(recipeId);
    if (index >= 0) {
        userData.favoriteRecipes.splice(index, 1);
        showInfo(t('favoriteRemoved') || 'Retiré des favoris');
    } else {
        userData.favoriteRecipes.push(recipeId);
        showSuccess(t('favoriteAdded') || 'Ajouté aux favoris');
    }
    
    markAsChanged();
    await saveUserData();
    displayRecipes(currentFilter);
    displayFavorites();
}

async function toggleUpgradeFavorite(upgradeId) {
    const index = userData.favoriteUpgrades.indexOf(upgradeId);
    if (index >= 0) {
        userData.favoriteUpgrades.splice(index, 1);
        showInfo(t('favoriteRemoved') || 'Retiré des favoris');
    } else {
        userData.favoriteUpgrades.push(upgradeId);
        showSuccess(t('favoriteAdded') || 'Ajouté aux favoris');
    }
    
    markAsChanged();
    await saveUserData();
    // Sauvegarder la position de scroll avant le refresh
    const vacpackContainer = document.getElementById('vacpack-upgrades');
    let scrollY = window.scrollY;
    let vacpackScroll = vacpackContainer ? vacpackContainer.scrollTop : null;
    displayVacpackUpgrades();
    // Restaurer la position de scroll après le refresh
    if (vacpackContainer && vacpackScroll !== null) {
        vacpackContainer.scrollTop = vacpackScroll;
    }
    window.scrollTo({ top: scrollY });
    displayFavorites();
}

async function toggleZoneFavorite(zoneId) {
    const index = userData.favoriteZones.indexOf(zoneId);
    if (index >= 0) {
        userData.favoriteZones.splice(index, 1);
        showInfo(t('favoriteRemoved') || 'Retiré des favoris');
    } else {
        userData.favoriteZones.push(zoneId);
        showSuccess(t('favoriteAdded') || 'Ajouté aux favoris');
    }
    
    markAsChanged();
    await saveUserData();
    displayZones();
    displayFavorites();
}

async function toggleDlcFavorite(dlcId) {
    const index = userData.favoriteDlcs.indexOf(dlcId);
    if (index >= 0) {
        userData.favoriteDlcs.splice(index, 1);
        showInfo(t('favoriteRemoved') || 'Retiré des favoris');
    } else {
        userData.favoriteDlcs.push(dlcId);
        showSuccess(t('favoriteAdded') || 'Ajouté aux favoris');
    }
    
    markAsChanged();
    await saveUserData();
    displayDlcs();
    displayFavorites();
}

let currentFilter = 'all';
let currentSort = 'default';

// Initialiser currentFilter et currentSort depuis l'URL au chargement
const initialUrlParams = new URLSearchParams(window.location.search);
if (initialUrlParams.get('recipeFilter')) {
    currentFilter = initialUrlParams.get('recipeFilter');
}
if (initialUrlParams.get('sort')) {
    currentSort = initialUrlParams.get('sort');
}

function sortRecipes(sortType) {
    currentSort = sortType;
    
    const urlParams = new URLSearchParams(window.location.search);
    const lang = urlParams.get('lang') || 'fr';
    const filter = urlParams.get('recipeFilter') || 'all';
    const newUrl = `${window.location.pathname}?lang=${lang}&recipeFilter=${filter}&sort=${sortType}#recipes`;
    window.history.replaceState({}, '', newUrl);
    
    displayRecipes(currentFilter);
}

function filterRecipes(filter) {
    currentFilter = filter;
    
    const urlParams = new URLSearchParams(window.location.search);
    const lang = urlParams.get('lang') || 'fr';
    const sort = urlParams.get('sort') || 'default';
    const newUrl = `${window.location.pathname}?lang=${lang}&recipeFilter=${filter}&sort=${sort}#recipes`;
    window.history.replaceState({}, '', newUrl);
    
    
    document.querySelectorAll('#recipes-section .filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    displayRecipes(filter);
}

function displayRecipes(filter) {
    const container = document.getElementById('recipes-list');
    const lang = currentLanguage || 'en';
    
    const labWarning = document.getElementById('lab-warning-recipes');
    if (labWarning) {
        labWarning.style.display = hasLabAccess() ? 'none' : 'block';
    }
    
    let filteredRecipes = RECIPES_DATA;
    if (filter === 'purchased') {
        // Inclure toutes les recettes dans le filtre 'purchased', y compris les gratuites si achetées
        filteredRecipes = RECIPES_DATA.filter(r => userData.purchasedRecipes.includes(r.id));
    } else if (filter === 'not-purchased') {
        filteredRecipes = RECIPES_DATA.filter(r => !userData.purchasedRecipes.includes(r.id));
    }
    
    
    if (currentSort !== 'default') {
        filteredRecipes = [...filteredRecipes]; 
        
        switch(currentSort) {
            case 'name-asc':
                filteredRecipes.sort((a, b) => {
                    const nameA = RECIPES_TRANSLATIONS[a.name] ? RECIPES_TRANSLATIONS[a.name][lang] : a.name;
                    const nameB = RECIPES_TRANSLATIONS[b.name] ? RECIPES_TRANSLATIONS[b.name][lang] : b.name;
                    return nameA.localeCompare(nameB);
                });
                break;
            case 'name-desc':
                filteredRecipes.sort((a, b) => {
                    const nameA = RECIPES_TRANSLATIONS[a.name] ? RECIPES_TRANSLATIONS[a.name][lang] : a.name;
                    const nameB = RECIPES_TRANSLATIONS[b.name] ? RECIPES_TRANSLATIONS[b.name][lang] : b.name;
                    return nameB.localeCompare(nameA);
                });
                break;
            case 'price-asc':
                filteredRecipes.sort((a, b) => a.price - b.price);
                break;
            case 'price-desc':
                filteredRecipes.sort((a, b) => b.price - a.price);
                break;
            case 'stock-desc':
                filteredRecipes.sort((a, b) => {
                    // Trie par quantité produisible (stock max possible)
                    const getQty = recipe => Math.min(...recipe.ingredients.map(ing => {
                        const parts = ing.split(' x');
                        const resourceName = parts[0];
                        const requiredQty = parseInt(parts[1]);
                        const currentQty = userData.refineryDeposits[resourceName] || 0;
                        return Math.floor(currentQty / requiredQty);
                    }));
                    return getQty(b) - getQty(a);
                });
                break;
        }
    }
    
    
    if (filteredRecipes.length === 0) {
        let emptyMessage = '';
        const labAccess = hasLabAccess();
        
        if (!labAccess) {
            emptyMessage = t('buyLabFirst') || 'Commencez à acheter le labo !';
        } else if (filter === 'purchased') {
            emptyMessage = t('noPurchasedRecipes') || 'Aucune recette achetée. Commencez à acheter des recettes !';
        } else if (filter === 'not-purchased') {
            emptyMessage = t('allRecipesPurchased') || 'Toutes les recettes ont été achetées ! Bravo ! 🎉';
        } else {
            emptyMessage = t('noRecipes') || 'Aucune recette disponible.';
        }
        container.innerHTML = `<div class="empty-message">${emptyMessage}</div>`;
        return;
    }
    
    container.innerHTML = filteredRecipes.map(recipe => {
        const isPurchased = userData.purchasedRecipes.includes(recipe.id);
        const isFavorite = userData.favoriteRecipes.includes(recipe.id);
        const hasResources = hasEnoughResources(recipe.ingredients);
        const resourcesPercentage = getResourcesPercentage(recipe.ingredients);
        const gradient = getGradientByPercentage(resourcesPercentage);
        const labAccess = hasLabAccess();
        const isFree = recipe.price === 0;
        const isLocked = !labAccess;
        const cannotTogglePurchase = isLocked;
        const cannotToggleFavorite = isLocked;
        
        
        const translatedName = RECIPES_TRANSLATIONS[recipe.name]
            ? RECIPES_TRANSLATIONS[recipe.name][lang]
            : recipe.name;
        
        
        const translatedIngredients = recipe.ingredients.map(ing => {
            const parts = ing.split(' x');
            const resourceName = parts[0];
            const requiredQty = parseInt(parts[1]);
            const currentQty = userData.refineryDeposits[resourceName] || 0;
            const translatedResource = ALL_RESOURCES_TRANSLATIONS[resourceName]
                ? ALL_RESOURCES_TRANSLATIONS[resourceName][lang]
                : resourceName;
            const hasEnough = currentQty >= requiredQty;
            const colorClass = hasEnough ? 'ingredient-sufficient' : 'ingredient-insufficient';
            const resourceIcon = `assets/resources/${resourceName.toLowerCase().replace(/\s+/g, '_')}.png`;
            return `<span class="${colorClass}"><img src="${resourceIcon}" class="ingredient-icon" onerror="this.style.display='none'"> ${translatedResource}: ${currentQty}/${requiredQty}</span>`;
        }).join('<br>');
        
        // Calculer combien de fois on peut produire la recette avec le stock actuel
        const producibleQty = Math.min(...recipe.ingredients.map(ing => {
            const parts = ing.split(' x');
            const resourceName = parts[0];
            const requiredQty = parseInt(parts[1]);
            const currentQty = userData.refineryDeposits[resourceName] || 0;
            return Math.floor(currentQty / requiredQty);
        }));
        
        // Utilise la traduction selon la langue
        const producibleLabel = producibleQty > 0
            ? (PRODUCIBLE_TRANSLATIONS.canProduce[lang] || 'Quantité produisible')
            : (PRODUCIBLE_TRANSLATIONS.cannotProduce[lang] || 'Impossible à produire');
        
        // Utilise le gradient dynamique selon le pourcentage de ressources
        const imageBg = getGradientByPercentage(resourcesPercentage);
        return `
            <div class="recipe-card ${hasResources ? 'has-resources' : 'missing-resources'} ${isLocked ? 'locked' : ''} ${isPurchased ? 'owned' : ''} ${isFree && !isPurchased ? 'free' : ''}">
                ${isLocked ? '<div class="locked-overlay">🔒</div>' : ''}
                <div class="recipe-header">
                    <h3 class="recipe-name">${translatedName}</h3>
                    <div class="recipe-price-badge">
                        ${isFree ? (t('free') || 'Gratuit') : formatPrice(recipe.price)}
                        ${isPurchased ? '<img src="assets/resources/icon_check.png" class="check-icon-small" style="margin-left: 8px;">' : ''}
                    </div>
                </div>
                <div>
                    <div class="recipe-image-container" style="background: ${imageBg};">
                        <img loading="lazy" src="assets/resources/${recipe.name.toLowerCase().replace(/\s+/g, '_').replace(/\(/g, '').replace(/\)/g, '')}.png" 
                            alt="${translatedName}"
                            onerror="this.parentElement.innerHTML='${recipe.icon}'"
                            class="recipe-img">
                    </div>
                    <div class="recipe-ingredients">
                        ${translatedIngredients}
                    </div>
                    <div class="recipe-producible${producibleQty === 0 ? ' recipe-producible-impossible' : ''}">${producibleLabel} ${producibleQty > 0 ? `<b>${producibleQty}</b>` : ''}</div>
                </div>
                <div class="recipe-actions">
                    <button class="btn-purchase ${isPurchased ? 'purchased' : ''} ${cannotTogglePurchase ? 'disabled' : ''}" 
                            onclick="${cannotTogglePurchase ? 'return false;' : `toggleRecipePurchase(${recipe.id})`}" 
                            ${cannotTogglePurchase ? 'disabled' : ''}>
                        ${isLocked && !isFree ? ('🔒 ' + (t('locked') || 'Verrouillé'))
                            : (isFree && isPurchased ? (t('obtained') || 'Obtenu')
                                : (isPurchased ? t('purchased') : (isFree ? t('obtain') : t('purchase'))))}
                    </button>
                    <button class="btn-favorite ${isFavorite ? 'active' : ''} ${cannotToggleFavorite ? 'disabled' : ''}" 
                            onclick="${cannotToggleFavorite ? 'return false;' : `toggleRecipeFavorite(${recipe.id})`}"
                            ${cannotToggleFavorite ? 'disabled' : ''}
                            title="${t('addFavorite')}">
                        ${isFavorite ? '★' : '☆'}
                    </button>
                </div>
            </div>
        `;
    }).join('');
    
    
    const totalPrice = RECIPES_DATA
        .filter(r => !userData.purchasedRecipes.includes(r.id))
        .reduce((sum, r) => sum + r.price, 0);
    
    document.getElementById('total-unpurchased-price').textContent = totalPrice.toLocaleString();
}



async function toggleClubTierPurchase(tierNumber) {
    const tier = CLUB_7ZEE_REWARDS.find(r => r.tier === tierNumber);
    if (!tier) return;
    
    
    if (tierNumber > 1) {
        const previousTierPurchased = userData.purchasedClubTiers.includes(tierNumber - 1);
        if (!previousTierPurchased) {
            console.error(t('mustPurchasePreviousTier'));
            showWarning(t('mustPurchasePreviousTier'));
            return;
        }
    }
    
    const index = userData.purchasedClubTiers.indexOf(tierNumber);
    if (index >= 0) {
        // Vérifie si le niveau supérieur est acheté
        const nextTierPurchased = userData.purchasedClubTiers.includes(tierNumber + 1);
        if (nextTierPurchased) {
            showError(t('cannotRemoveTierWithNextPurchased'));
            return;
        }
        userData.purchasedClubTiers.splice(index, 1);
        showInfo(t('tierRemoved'));
    } else {
        userData.purchasedClubTiers.push(tierNumber);
        showSuccess(t('tierPurchased'));
    }
    
    markAsChanged();
    await saveUserData();
    displayClubRewards();
}

function displayClubRewards() {
    const container = document.getElementById('club-rewards');
    if (!container) {
        console.error('Club rewards container not found');
        return;
    }
    
    if (typeof CLUB_7ZEE_REWARDS === 'undefined') {
        console.error('CLUB_7ZEE_REWARDS is not defined');
        return;
    }
    
    const lang = currentLanguage || 'en';
    
    container.innerHTML = CLUB_7ZEE_REWARDS.map((reward, index) => {
        const isPurchased = userData.purchasedClubTiers.includes(reward.tier);
        const canPurchase = reward.tier === 1 || userData.purchasedClubTiers.includes(reward.tier - 1);
        const rewardName = reward.name;
        
        
        const tierPrice = index === 0 
            ? reward.required 
            : reward.required - CLUB_7ZEE_REWARDS[index - 1].required;
        
        
        const translatedRewards = reward.rewards.map(rewardItem => {
            return CLUB_REWARDS_TRANSLATIONS[rewardItem]
                ? CLUB_REWARDS_TRANSLATIONS[rewardItem][lang]
                : rewardItem;
        });
        
        return `
            <div class="club-tier-card ${isPurchased ? 'tier-purchased' : ''} ${canPurchase && !isPurchased ? 'tier-available' : ''} ${!canPurchase && !isPurchased ? 'locked' : ''}">
                ${!canPurchase && !isPurchased ? '<div class="locked-overlay">🔒</div>' : ''}
                <div class="tier-header">
                    <div class="tier-badge">${t('level')} ${reward.tier}</div>
                    <div class="tier-price">
                        ${tierPrice.toLocaleString()} <img src="assets/resources/iconNewBuck.png" alt="Newbucks" class="currency-icon">
                        ${isPurchased ? '<img src="assets/resources/icon_check.png" class="check-icon-small" style="margin-left: 8px;">' : ''}
                    </div>
                </div>
                
                <div class="tier-content">
                    <h3 class="tier-title">${rewardName}</h3>
                    
                    <div class="tier-rewards">
                        <h4 class="rewards-title">${t('rewards') || 'Récompenses'}</h4>
                        <ul class="rewards-list">
                            ${translatedRewards.map(r => `<li><span class="reward-bullet">◆</span> ${r}</li>`).join('')}
                        </ul>
                    </div>
                </div>
                
                <button class="btn-tier-action ${isPurchased ? 'tier-purchased' : ''}" 
                        onclick="toggleClubTierPurchase(${reward.tier})"
                        ${!canPurchase && !isPurchased ? 'disabled' : ''}>
                    ${isPurchased ? t('purchased') : '<span class="btn-icon">🛒</span> ' + t('purchase')}
                </button>
            </div>
        `;
    }).join('');
}



async function toggleDlcOwnership(dlcId) {
    const dlc = SLIME_RANCHER_DLCS.find(d => d.id === dlcId);
    
    
    // On peut retirer les gratuits aussi, donc on retire la restriction
    
    const index = userData.ownedDlcs.indexOf(dlcId);
    if (index >= 0) {
        userData.ownedDlcs.splice(index, 1);
        showInfo(t('dlcRemoved') || 'DLC retiré');
    } else {
        userData.ownedDlcs.push(dlcId);
        showSuccess(t('dlcAdded') || 'DLC ajouté');
    }
    
    markAsChanged();
    await saveUserData();
    displayDlcs();
}

function displayDlcs() {
    const container = document.getElementById('dlcs-list');
    if (!container) {
        console.error('DLC container not found');
        return;
    }
    
    if (typeof SLIME_RANCHER_DLCS === 'undefined') {
        console.error('SLIME_RANCHER_DLCS is not defined');
        return;
    }
    
    const lang = currentLanguage || 'en';
    
    // Trier les DLCs : gratuits d'abord, puis payants
    const sortedDlcs = [...SLIME_RANCHER_DLCS].sort((a, b) => {
        if (a.price === 0 && b.price !== 0) return -1;
        if (a.price !== 0 && b.price === 0) return 1;
        return 0;
    });
    
    container.innerHTML = sortedDlcs.map(dlc => {
        const isOwned = userData.ownedDlcs.includes(dlc.id);
        const isFavorite = userData.favoriteDlcs.includes(dlc.id);
        const isFree = dlc.price === 0;
        
        
        const translatedName = DLC_TRANSLATIONS[dlc.name]
            ? DLC_TRANSLATIONS[dlc.name][lang]
            : dlc.name;
        
        
        const translatedContent = dlc.content.map(item => {
            return DLC_TRANSLATIONS[item]
                ? DLC_TRANSLATIONS[item][lang]
                : item;
        });
        
        // Map des noms d'images personnalisés
        const imageMap = {
            'galactic-bundle': 'dlc_galactic.png',
            'secret-style-pack': 'dlc_secret_style_pack.jpg'
        };
        const imageName = imageMap[dlc.id] || `dlc_${dlc.id}.png`;
        
        return `
            <div class="dlc-card ${isOwned ? 'owned' : ''} ${isFree ? 'free' : ''}">
                <div class="dlc-header">
                    <h3 class="dlc-name">${translatedName}</h3>
                    <div class="dlc-price">
                        ${isFree ? (t('free') || 'Gratuit') : formatPrice(dlc.price)}
                        ${isOwned ? '<img src="assets/resources/icon_check.png" class="check-icon-small" style="margin-left: 8px;">' : ''}
                    </div>
                </div>
                <div class="dlc-image-container">
                    <img loading="lazy" src="assets/resources/${imageName}" alt="${translatedName}" class="dlc-img" onerror="this.parentElement.innerHTML='🎮'">
                </div>
                <div class="dlc-content">
                    <h4>${t('dlcContent')}</h4>
                    <ul>
                        ${translatedContent.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                </div>
                <div class="dlc-actions">
                    <button class="btn-dlc ${isOwned ? 'owned' : ''}" 
                            onclick="toggleDlcOwnership('${dlc.id}')">
                        ${isFree ? (isOwned ? (t('obtained') || 'Obtenu') : (t('obtain') || 'Obtenir')) : (isOwned ? t('dlcOwned') : t('dlcBuy'))}
                    </button>
                    <button class="btn-favorite" onclick="toggleDlcFavorite('${dlc.id}')" title="${t('addFavorite')}">
                        ${isFavorite ? '★' : '☆'}
                    </button>
                </div>
            </div>
        `;
    }).join('');
}



function hasLabAccess() {
    return userData.ownedZones && userData.ownedZones.includes('lab');
}

async function toggleZone(zoneId) {
    const index = userData.ownedZones.indexOf(zoneId);
    if (index >= 0) {
        if (zoneId === 'lab') {
            const hasDeposits = Object.values(userData.refineryDeposits).some(qty => qty > 0);
            if (hasDeposits) {
                showError(t('cannotRemoveLab') || 'Impossible de retirer le labo avec des ressources dans la raffinerie');
                return;
            }
        }
        userData.ownedZones.splice(index, 1);
        showInfo(t('zoneRemoved') || 'Terre retirée');
    } else {
        userData.ownedZones.push(zoneId);
        showSuccess(t('zoneAdded') || 'Terre achetée');
    }
    
    markAsChanged();
    await saveUserData();
    displayZones();
    
    displayRefineryDeposits();
    displayRecipes();
}

function displayZones() {
    const container = document.getElementById('zones-list');
    if (!container) {
        console.error('Zones container not found');
        return;
    }
    
    if (typeof ZONES_DATA === 'undefined') {
        console.error('ZONES_DATA is not defined');
        return;
    }
    
    const lang = currentLanguage || 'en';
    
    container.innerHTML = ZONES_DATA.map(zone => {
        const isOwned = userData.ownedZones.includes(zone.id);
        const isFree = zone.price === 0;
        const isFavorite = userData.favoriteZones.includes(zone.id);
        
        
        const translatedName = ZONES_TRANSLATIONS[zone.nameKey]
            ? ZONES_TRANSLATIONS[zone.nameKey][lang]
            : zone.nameKey;
        
        
        const zoneImage = zone.image || `iconExpan${zone.id.charAt(0).toUpperCase() + zone.id.slice(1)}.png`;
        
        return `
            <div class="zone-card ${isOwned && !isFree ? 'owned' : ''} ${isFree ? 'free' : ''}">
                <div class="zone-header">
                    <h3 class="zone-name">${translatedName}</h3>
                    <div class="zone-price-badge">
                        ${isFree ? (t('included') || 'Inclus') : formatPrice(zone.price)}
                        ${isOwned && !isFree ? '<img src="assets/resources/icon_check.png" class="check-icon-small" style="margin-left: 8px;">' : ''}
                    </div>
                </div>
                <div class="zone-image-container">
                    <img loading="lazy" src="assets/resources/${zoneImage}" alt="${translatedName}" class="zone-img">
                </div>
                ${zone.unlocks.length > 0 ? `
                    <div class="zone-content">
                        <h4>${t('zoneUnlock') || 'Débloque'}</h4>
                        <ul>
                            ${zone.unlocks.map(unlock => {
                                const unlockTranslation = (typeof ZONE_UNLOCKS_TRANSLATIONS !== 'undefined' && ZONE_UNLOCKS_TRANSLATIONS[unlock] && ZONE_UNLOCKS_TRANSLATIONS[unlock][lang]) ? ZONE_UNLOCKS_TRANSLATIONS[unlock][lang] : unlock;
                                return `<li>${unlockTranslation}</li>`;
                            }).join('')}
                        </ul>
                    </div>
                ` : ''}
                ${!isFree ? `
                    <div class="zone-actions">
                        <button class="btn-zone ${isOwned ? 'owned' : ''}" 
                                onclick="toggleZone('${zone.id}')">
                            ${isOwned ? (t('zoneOwned') || 'Acheté') : (t('zoneBuy') || 'Acheter')}
                        </button>
                        <button class="btn-favorite" onclick="toggleZoneFavorite('${zone.id}')" title="${t('addFavorite')}">
                            ${isFavorite ? '★' : '☆'}
                        </button>
                    </div>
                ` : ''}
            </div>
        `;
    }).join('');
}

function canPurchaseUpgrade(upgrade) {
    // Protection retirée : on peut acheter n'importe quelle amélioration
    return true;
}

async function toggleVacpackUpgrade(upgradeId) {
    const upgrade = VACPACK_UPGRADES.find(u => u.id === upgradeId);
    if (!upgrade) return;
    
    
    // Suppression de la restriction : on peut retirer les gratuits
    
    
    // Protection retirée : on peut acheter n'importe quelle amélioration
    
    const index = userData.purchasedVacpackUpgrades.indexOf(upgradeId);
    if (index >= 0) {
        // On ne peut retirer que si le niveau suivant n'est pas acheté
        const nextUpgrade = VACPACK_UPGRADES.find(u => u.category === upgrade.category && u.level === upgrade.level + 1);
        if (nextUpgrade && userData.purchasedVacpackUpgrades.includes(nextUpgrade.id)) {
            showError(t('cannotRemoveTierWithNextPurchased') || 'Impossible de retirer ce niveau tant que le suivant est acheté.');
            return;
        }
        userData.purchasedVacpackUpgrades.splice(index, 1);
        showInfo(t('upgradeRemoved') || 'Amélioration retirée');
    } else {
        // Protection retirée : on peut acheter n'importe quelle amélioration
        userData.purchasedVacpackUpgrades.push(upgradeId);
        showSuccess(t('upgradePurchased') || 'Amélioration achetée');
    }
    
    markAsChanged();
    await saveUserData();
    displayVacpackUpgrades();
}



function filterVacpack(filter) {
    vacpackFilter = filter;
    // update URL like recipes page
    const urlParams = new URLSearchParams(window.location.search);
    const lang = urlParams.get('lang') || 'fr';
    const sort = urlParams.get('sort') || vacpackSort || 'default';
    const newUrl = `${window.location.pathname}?lang=${lang}&vacpackFilter=${filter}&sort=${sort}#vacpack`;
    window.history.replaceState({}, '', newUrl);

    // update UI buttons
    document.querySelectorAll('#vacpack-section .filter-btn').forEach(btn => btn.classList.remove('active'));
    const btn = document.querySelector(`#vacpack-section .filter-btn[onclick="filterVacpack('${filter}')"]`);
    if (btn) btn.classList.add('active');

    displayVacpackUpgrades();
}

function sortVacpackUpgrades(sort) {
    vacpackSort = sort;
    const urlParams = new URLSearchParams(window.location.search);
    const lang = urlParams.get('lang') || 'fr';
    const newUrl = `${window.location.pathname}?lang=${lang}&vacpackFilter=${vacpackFilter}&sort=${sort}#vacpack`;
    window.history.replaceState({}, '', newUrl);
    displayVacpackUpgrades();
}

function getFilteredSortedVacpackUpgrades() {
    const lang = currentLanguage || 'en';
    let upgrades = [...VACPACK_UPGRADES];
    // Filtrage désactivé : toujours tout afficher
    // sort
    switch (vacpackSort) {
        case 'name-asc':
            upgrades.sort((a, b) => {
                const nameA = VACPACK_TRANSLATIONS[a.name] ? VACPACK_TRANSLATIONS[a.name][lang] : a.name;
                const nameB = VACPACK_TRANSLATIONS[b.name] ? VACPACK_TRANSLATIONS[b.name][lang] : b.name;
                return nameA.localeCompare(nameB);
            });
            break;
        case 'name-desc':
            upgrades.sort((a, b) => {
                const nameA = VACPACK_TRANSLATIONS[a.name] ? VACPACK_TRANSLATIONS[a.name][lang] : a.name;
                const nameB = VACPACK_TRANSLATIONS[b.name] ? VACPACK_TRANSLATIONS[b.name][lang] : b.name;
                return nameB.localeCompare(nameA);
            });
            break;
        case 'price-asc':
            upgrades.sort((a, b) => a.price - b.price);
            break;
        case 'price-desc':
            upgrades.sort((a, b) => b.price - a.price);
            break;
        default:
            // default keep original order
            break;
    }
    return upgrades;
}

function displayVacpackUpgrades() {
    const container = document.getElementById('vacpack-upgrades');
    if (!container) {
        console.error('Vacpack container not found');
        return;
    }
    
    if (typeof VACPACK_UPGRADES === 'undefined') {
        console.error('VACPACK_UPGRADES is not defined');
        return;
    }
    
    const lang = currentLanguage || 'en';
    
    
    const upgrades = getFilteredSortedVacpackUpgrades();
    // Pour chaque upgrade, ajouter une propriété "unlocks" qui référence le niveau suivant
    upgrades.forEach(upg => {
        upg.unlocks = upgrades.filter(u => u.category === upg.category && u.level === upg.level + 1);
    });
    let html = '';
    if (vacpackFilter === 'purchased' && upgrades.length === 0) {
        html = `<div class="empty-message">${t('noPurchasedVacpackUpgrades') || 'Aucune amélioration achetée. Commencez à acheter des améliorations !'}</div>`;
    } else {
        // Regroupement par section
    const cardio = upgrades.filter(u => u.category === 'core' && /heart|cardio/i.test(u.name));
    const power = upgrades.filter(u => u.category === 'core' && /power/i.test(u.name));
    const tank = upgrades.filter(u => u.category === 'tank' && /tank|amplificateur/i.test(u.name));
    // Le réservoir d'eau doit être dans "Autres"
    const other = upgrades.filter(u => !cardio.includes(u) && !power.includes(u) && !tank.includes(u) || /eau|water/i.test(u.name));

        function renderSection(title, upgradesArr) {
            if (upgradesArr.length === 0) return '';
            // grille explicite : 1 colonne, n lignes, grid-area pour chaque carte
            const gridRows = upgradesArr.length;
            let gridCards = upgradesArr.map((upgrade, idx) => {
                const isPurchased = userData.purchasedVacpackUpgrades.includes(upgrade.id);
                const translatedName = VACPACK_TRANSLATIONS[upgrade.name]
                    ? VACPACK_TRANSLATIONS[upgrade.name][lang]
                    : upgrade.name;
                const isFavorite = userData.favoriteUpgrades.includes(upgrade.id);
                const isFree = upgrade.price === 0;
                let canPurchase = true;
                if (upgrade.level > 1) {
                    const previous = VACPACK_UPGRADES.find(u => u.category === upgrade.category && u.level === upgrade.level - 1);
                    if (previous && !userData.purchasedVacpackUpgrades.includes(previous.id)) {
                        canPurchase = false;
                    }
                }
                const imageSrc = upgrade.image ? upgrade.image : `assets/resources/vacpack_${upgrade.category}_${upgrade.level || upgrade.id}.png`;
                let btnText = t('purchase');
                if (isPurchased) {
                    btnText = isFree ? (t('obtain') || 'Obtenu') : t('purchased');
                } else if (isFree) {
                    btnText = t('obtain') || 'Obtenir';
                }
                // grid-area: ligne idx+1
                return `
                    <div class="vacpack-upgrade-card ${isPurchased ? 'owned' : ''} ${!canPurchase && !isPurchased ? 'locked' : ''} ${isFree ? 'free' : ''} div${idx+1}" style="grid-area: ${idx+1} / 1 / ${idx+2} / 2;">
                        ${!canPurchase && !isPurchased ? '<div class="locked-overlay">🔒</div>' : ''}
                        <div class="upgrade-header">
                            <h3 class="upgrade-name">${translatedName}</h3>
                            <div class="upgrade-price-badge">
                                ${isFree ? (t('free') || 'Gratuit') : formatPrice(upgrade.price)}
                                ${isPurchased ? '<img src="assets/resources/icon_check.png" class="check-icon-small" style="margin-left: 8px;">' : ''}
                            </div>
                        </div>
                        <div>
                            <div class="upgrade-image-container">
                                <img loading="lazy" src="${imageSrc}" 
                                    alt="${translatedName}" class="upgrade-img"
                                    onerror="this.parentElement.innerHTML='${upgrade.icon}'">
                            </div>
                            <div class="upgrade-description" style="margin: 16px 0; color: #444; font-size: 15px; line-height: 1.5;">
                                ${getVacpackDescription(upgrade)}
                            </div>
                        </div>
                        <div class="upgrade-actions">
                            <button class="btn-upgrade ${isPurchased ? 'owned' : ''}"
                                    onclick="toggleVacpackUpgrade(${upgrade.id})"
                                    ${!canPurchase && !isPurchased ? 'disabled' : ''}>
                                ${btnText}
                            </button>
                            <button class="btn-favorite ${isFavorite ? 'active' : ''}" onclick="toggleUpgradeFavorite(${upgrade.id})" title="${t('addFavorite')}">
                                ${isFavorite ? '★' : '☆'}
                            </button>
                        </div>
                    </div>
                `;
            }).join('');
            // Limite la hauteur à la section parente et active le scroll vertical
            return `<div class="vacpack-section-group"><h2 class="vacpack-section-title">${title}</h2><div class="vacpack-section-list scroll-x parent">${gridCards}</div></div>`;
        }

        html += `<div class="vacpack-sections">
            ${renderSection('Cardio-Module', cardio)}
            ${renderSection('Noyau de Puissance', power)}
            ${renderSection('Amplificateur', tank)}
            ${renderSection('Autres', other)}
        </div>`;
    }
    container.innerHTML = `<div class="vacpack-upgrades-list">${html}</div>`;

}



function displayFavorites() {
    const favoritesContainer = document.getElementById('favorites-list');
    if (!favoritesContainer) {
        console.error('Favorites container not found');
        return;
    }
    
    const lang = currentLanguage || 'en';
    const favoriteRecipes = RECIPES_DATA.filter(r => userData.favoriteRecipes.includes(r.id));
    const favoriteUpgrades = VACPACK_UPGRADES.filter(u => userData.favoriteUpgrades.includes(u.id));
    const favoriteZones = ZONES_DATA.filter(z => userData.favoriteZones.includes(z.id));
    const favoriteDlcs = SLIME_RANCHER_DLCS.filter(d => userData.favoriteDlcs.includes(d.id));
    
    const totalFavorites = favoriteRecipes.length + favoriteUpgrades.length + favoriteZones.length + favoriteDlcs.length;
    
    if (totalFavorites === 0) {
        favoritesContainer.innerHTML = `<div class="empty-message">${t('noFavorites') || 'Aucun favori pour le moment. Ajoutez des éléments en cliquant sur ☆'}</div>`;
        return;
    }
    
    let content = '';
    
    if (favoriteRecipes.length > 0) {
        content += `<h3 class="favorites-category-title">${t('recipesTitle') || 'Recettes'}</h3>`;
        content += `<div class="recipes-grid">`;
        content += RECIPES_DATA.filter(r => userData.favoriteRecipes.includes(r.id)).map(recipe => renderRecipeCard(recipe)).join('');
// Fonction utilitaire pour rendre une recette (copié-collé de displayRecipes)
function renderRecipeCard(recipe) {
    const lang = currentLanguage || 'en';
    const isPurchased = userData.purchasedRecipes.includes(recipe.id);
    const isFavorite = userData.favoriteRecipes.includes(recipe.id);
    const hasResources = hasEnoughResources(recipe.ingredients);
    const resourcesPercentage = getResourcesPercentage(recipe.ingredients);
    const gradient = getGradientByPercentage(resourcesPercentage);
    const labAccess = hasLabAccess();
    const isFree = recipe.price === 0;
    const isLocked = !labAccess;
    const cannotTogglePurchase = isLocked;
    const cannotToggleFavorite = isLocked;
    const translatedName = RECIPES_TRANSLATIONS[recipe.name]
        ? RECIPES_TRANSLATIONS[recipe.name][lang]
        : recipe.name;
    const translatedIngredients = recipe.ingredients.map(ing => {
        const parts = ing.split(' x');
        const resourceName = parts[0];
        const requiredQty = parseInt(parts[1]);
        const currentQty = userData.refineryDeposits[resourceName] || 0;
        const translatedResource = ALL_RESOURCES_TRANSLATIONS[resourceName]
            ? ALL_RESOURCES_TRANSLATIONS[resourceName][lang]
            : resourceName;
        const hasEnough = currentQty >= requiredQty;
        const colorClass = hasEnough ? 'ingredient-sufficient' : 'ingredient-insufficient';
        const resourceIcon = `assets/resources/${resourceName.toLowerCase().replace(/\s+/g, '_')}.png`;
        return `<span class="${colorClass}"><img src="${resourceIcon}" class="ingredient-icon" onerror="this.style.display='none'"> ${translatedResource}: ${currentQty}/${requiredQty}</span>`;
    }).join('<br>');
    const producibleQty = Math.min(...recipe.ingredients.map(ing => {
        const parts = ing.split(' x');
        const resourceName = parts[0];
        const requiredQty = parseInt(parts[1]);
        const currentQty = userData.refineryDeposits[resourceName] || 0;
        return Math.floor(currentQty / requiredQty);
    }));
    const producibleLabel = producibleQty > 0
        ? (PRODUCIBLE_TRANSLATIONS.canProduce[lang] || 'Quantité produisible')
        : (PRODUCIBLE_TRANSLATIONS.cannotProduce[lang] || 'Impossible à produire');
    const imageBg = getGradientByPercentage(resourcesPercentage);
    return `
        <div class="recipe-card ${hasResources ? 'has-resources' : 'missing-resources'} ${isLocked ? 'locked' : ''} ${isPurchased ? 'owned' : ''}">
            ${isLocked ? '<div class="locked-overlay">🔒</div>' : ''}
            <div class="recipe-header">
                <h3 class="recipe-name">${translatedName}</h3>
                <div class="recipe-price-badge">
                    ${isFree ? (t('free') || 'Gratuit') : formatPrice(recipe.price)}
                    ${isPurchased ? '<img src="assets/resources/icon_check.png" class="check-icon-small" style="margin-left: 8px;">' : ''}
                </div>
            </div>
            <div>
                <div class="recipe-image-container" style="background: ${imageBg};">
                    <img loading="lazy" src="assets/resources/${recipe.name.toLowerCase().replace(/\s+/g, '_').replace(/\(/g, '').replace(/\)/g, '')}.png" 
                        alt="${translatedName}"
                        onerror="this.parentElement.innerHTML='${recipe.icon}'"
                        class="recipe-img">
                </div>
                <div class="recipe-ingredients">
                    ${translatedIngredients}
                </div>
                <div class="recipe-producible${producibleQty === 0 ? ' recipe-producible-impossible' : ''}">${producibleLabel} ${producibleQty > 0 ? `<b>${producibleQty}</b>` : ''}</div>
            </div>
            <div class="recipe-actions">
                <button class="btn-purchase ${isPurchased ? 'purchased' : ''} ${cannotTogglePurchase ? 'disabled' : ''}" 
                        onclick="${cannotTogglePurchase ? 'return false;' : `toggleRecipePurchase(${recipe.id})`}" 
                        ${cannotTogglePurchase ? 'disabled' : ''}>
                    ${isLocked && !isFree ? ('🔒 ' + (t('locked') || 'Verrouillé'))
                        : (isFree && isPurchased ? (t('obtained') || 'Obtenu')
                            : (isPurchased ? t('purchased') : (isFree ? t('obtain') : t('purchase'))))}
                </button>
                <button class="btn-favorite ${isFavorite ? 'active' : ''} ${cannotToggleFavorite ? 'disabled' : ''}" 
                        onclick="${cannotToggleFavorite ? 'return false;' : `toggleRecipeFavorite(${recipe.id})`}"
                        ${cannotToggleFavorite ? 'disabled' : ''}
                        title="${t('addFavorite')}">
                    ${isFavorite ? '★' : '☆'}
                </button>
            </div>
        </div>
    `;
}
        content += `</div>`;
    }
    
    if (favoriteUpgrades.length > 0) {
        content += `<h3 class="favorites-category-title">${t('vacpackTitle') || 'Améliorations Aspipack'}</h3>`;
        content += `<div class="vacpack-grid">`;
        content += favoriteUpgrades.map(upgrade => {
            const isPurchased = userData.purchasedVacpackUpgrades.includes(upgrade.id);
            const isFree = upgrade.price === 0;
            const isLocked = !canPurchaseUpgrade(upgrade);
            
            const translatedName = VACPACK_TRANSLATIONS[upgrade.name]
                ? VACPACK_TRANSLATIONS[upgrade.name][lang]
                : upgrade.name;
            
            return `
                <div class="vacpack-upgrade-card ${isPurchased ? 'owned' : ''} ${isLocked ? 'locked' : ''} ${isFree ? 'free' : ''}">
                    ${isLocked && !isPurchased ? '<div class="locked-overlay">🔒</div>' : ''}
                    <div class="upgrade-header">
                        <h3 class="upgrade-name">${translatedName}</h3>
                        <div class="upgrade-price-badge">
                            ${isFree ? (t('free') || 'Gratuit') : formatPrice(upgrade.price)}
                            ${isPurchased ? '<img src="assets/resources/icon_check.png" class="check-icon-small" style="margin-left: 8px;">' : ''}
                        </div>
                    </div>
                    <div>
                        <div class="upgrade-image-container">
                            <img loading="lazy" src="assets/resources/vacpack_${upgrade.category}_${upgrade.level || upgrade.id}.png" 
                                 alt="${translatedName}" class="upgrade-img"
                                 onerror="this.parentElement.innerHTML='${upgrade.icon}'">
                        </div>
                        <div class="upgrade-description" style="margin: 16px 0; color: #444; font-size: 15px; line-height: 1.5;">
                            ${getVacpackDescription(upgrade)}
                        </div>
                    </div>
                    <div class="upgrade-actions">
                        <button class="btn-upgrade ${isPurchased ? 'owned' : ''}" 
                                onclick="toggleVacpackUpgrade(${upgrade.id})"
                                ${isLocked && !isPurchased ? 'disabled' : ''}>
                            ${isPurchased ? t('purchased') : (isFree ? t('obtain') : t('purchase'))}
                        </button>
                        <button class="btn-favorite active" 
                                onclick="toggleUpgradeFavorite(${upgrade.id})" 
                                title="${t('removeFavorite') || 'Retirer des favoris'}">
                            ★
                        </button>
                    </div>
                </div>
            `;
        }).join('');
        content += `</div>`;
    }
    
    if (favoriteZones.length > 0) {
        content += `<h3 class="favorites-category-title">${t('zonesTitle') || 'Terres'}</h3>`;
        content += `<div class="zones-grid">`;
        content += favoriteZones.map(zone => {
            const isOwned = userData.ownedZones.includes(zone.id);
            const isFree = zone.price === 0;
            const isFavorite = userData.favoriteZones.includes(zone.id);
            const translatedName = ZONES_TRANSLATIONS[zone.nameKey]
                ? ZONES_TRANSLATIONS[zone.nameKey][lang]
                : zone.nameKey;
            const zoneImage = zone.image || `iconExpan${zone.id.charAt(0).toUpperCase() + zone.id.slice(1)}.png`;
            
            return `
                <div class="zone-card ${isOwned && !isFree ? 'owned' : ''} ${isFree ? 'free' : ''}">
                    <div class="zone-header">
                        <h3 class="zone-name">${translatedName}</h3>
                        <div class="zone-price-badge">
                            ${isFree ? (t('included') || 'Inclus') : formatPrice(zone.price)}
                            ${isOwned && !isFree ? '<img src="assets/resources/icon_check.png" class="check-icon-small" style="margin-left: 8px;">' : ''}
                        </div>
                    </div>
                    <div class="zone-image-container">
                        <img loading="lazy" src="assets/resources/${zoneImage}" alt="${translatedName}" class="zone-img">
                    </div>
                    ${zone.unlocks.length > 0 ? `
                        <div class="zone-content">
                            <h4>${t('zoneUnlock') || 'Débloque'}</h4>
                            <ul>
                                ${zone.unlocks.map(unlock => `<li>${unlock}</li>`).join('')}
                            </ul>
                        </div>
                    ` : ''}
                    ${!isFree ? `
                        <div class="zone-actions">
                            <button class="btn-zone ${isOwned ? 'owned' : ''}" 
                                    onclick="toggleZone('${zone.id}')">
                                ${isOwned ? (t('zoneOwned') || 'Acheté') : (t('zoneBuy') || 'Acheter')}
                            </button>
                            <button class="btn-favorite" onclick="toggleZoneFavorite('${zone.id}')" title="${t('addFavorite')}">
                                ${isFavorite ? '★' : '☆'}
                            </button>
                        </div>
                    ` : ''}
                </div>
            `;
        }).join('');
        content += `</div>`;
    }
    
    if (favoriteDlcs.length > 0) {
        content += `<h3 class="favorites-category-title">${t('dlcsTitle') || 'DLCs'}</h3>`;
        content += `<div class="dlcs-grid">`;
        // Trier pour mettre le pack gratuit en premier
        const sortedDlcs = [...favoriteDlcs].sort((a, b) => {
            if (a.price === 0 && b.price !== 0) return -1;
            if (a.price !== 0 && b.price === 0) return 1;
            return 0;
        });
        content += sortedDlcs.map(dlc => {
            const isOwned = userData.ownedDlcs.includes(dlc.id);
            const isFree = dlc.price === 0;
            const isFavorite = userData.favoriteDlcs.includes(dlc.id);
            const translatedName = DLC_TRANSLATIONS[dlc.name]
                ? DLC_TRANSLATIONS[dlc.name][lang]
                : dlc.name;
            
            const translatedContent = dlc.content.map(item => {
                return DLC_TRANSLATIONS[item]
                    ? DLC_TRANSLATIONS[item][lang]
                    : item;
            });
            
            // Map des noms d'images personnalisés
            const imageMap = {
                'galactic-bundle': 'dlc_galactic.png',
                'secret-style-pack': 'dlc_secret_style_pack.jpg'
            };
            const imageName = imageMap[dlc.id] || `dlc_${dlc.id}.png`;
            
            return `
                <div class="dlc-card ${isOwned ? 'owned' : ''} ${isFree ? 'free' : ''}">
                    <div class="dlc-header">
                        <h3 class="dlc-name">${translatedName}</h3>
                        <div class="dlc-price">
                            ${isFree ? (t('free') || 'Gratuit') : formatPrice(dlc.price)}
                            ${isOwned ? '<img src="assets/resources/icon_check.png" class="check-icon-small" style="margin-left: 8px;">' : ''}
                        </div>
                    </div>
                    <div class="dlc-image-container">
                        <img loading="lazy" src="assets/resources/${imageName}" alt="${translatedName}" class="dlc-img" onerror="this.parentElement.innerHTML='🎮'">
                    </div>
                    <div class="dlc-content">
                        <h4>${t('dlcContent')}</h4>
                        <ul>
                            ${translatedContent.map(item => `<li>${item}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="dlc-actions">
                        <button class="btn-dlc ${isOwned ? 'owned' : ''}" 
                                onclick="toggleDlcOwnership('${dlc.id}')">
                            ${isFree ? (isOwned ? (t('obtained') || 'Obtenu') : (t('obtain') || 'Obtenir')) : (isOwned ? t('dlcOwned') : t('dlcBuy'))}
                        </button>
                        <button class="btn-favorite active" onclick="toggleDlcFavorite('${dlc.id}')" title="${t('removeFavorite') || 'Retirer des favoris'}">
                            ★
                        </button>
                    </div>
                </div>
            `;
        }).join('');
        content += `</div>`;
    }
    
    favoritesContainer.innerHTML = content;
}


// Sauvegarder avant de quitter la page
window.addEventListener('beforeunload', async (e) => {
    // Sauvegarder la position de scroll
    sessionStorage.setItem('scrollPosition', window.scrollY.toString());
    
    if (hasUnsavedChanges && currentUser) {
        e.preventDefault();
        await saveUserData();
    }
});


window.addEventListener('load', () => {
    // Restaurer la position de scroll après le chargement
    const savedScrollPosition = sessionStorage.getItem('scrollPosition');
    if (savedScrollPosition) {
        setTimeout(() => {
            window.scrollTo(0, parseInt(savedScrollPosition));
        }, 100);
    }
});

// Gérer la visibilité du bouton scroll to top
window.addEventListener('scroll', () => {
    const scrollToTopBtn = document.getElementById('scroll-to-top');
    if (scrollToTopBtn) {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    }
});

// Fonction pour remonter en haut de la page
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function sortRefineryDeposits(sortType) {
    currentRefinerySort = sortType;
    const urlParams = new URLSearchParams(window.location.search);
    const lang = urlParams.get('lang') || 'fr';
    const filter = currentRefineryFilter || 'all';
    const newUrl = `${window.location.pathname}?lang=${lang}&refineryFilter=${filter}&sort=${sortType}#refinery`;
    window.history.replaceState({}, '', newUrl);
    displayRefineryDeposits();
}
