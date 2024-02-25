const ListeCours = 
      [
         {sigle: "CoursTS", description: "Travail Social", NbrInscription : 2, NbrMaxInscription : 3 },
         {sigle: "CoursSocio", description: "Sociologie", NbrInscription : 2, NbrMaxInscription : 3 },
         {sigle: "CoursT", description: "Théatre", NbrInscription : 1, NbrMaxInscription : 3 },
         {sigle: "CoursJS", description: "Code Java Script", NbrInscription : 2, NbrMaxInscription : 3 },
         {sigle: "CoursHTML", description: "Code HTML", NbrInscription : 2, NbrMaxInscription : 3 },
         {sigle: "CoursCSS", description: "Code CSS", NbrInscription : 1, NbrMaxInscription : 3 },
         
      ]

const ListeEtudiant = 
      [
         {numDA : 1, nom : "Tramblay", prenom : "Jean", programme : "programmation Web", ListCourtInscrit : ["CoursJS", "CoursC"]},
         {numDA : 2, nom : "Dupond", prenom : "Carl", programme : "Science Humaine", ListCourtInscrit : ["CoursTS", "CoursSocio", "CoursJS", "CoursC", "CoursThéatre"]},
         {numDA : 3, nom : "Karta", prenom : "Djamil", programme : "programmation Web", ListCourtInscrit : ['CoursJS', 'CoursHTML', 'CoursCSS']},
         {numDA : 4, nom : "Doe", prenom : "John", programme : "Science Humaine", ListCourtInscrit :['CoursTS', 'CoursSocio', 'CoursThéatre']},
         {numDA : 5, nom : "Robinet", prenom : "Vivien", programme : "Science Humaine", ListCourtInscrit : ["CoursTS", "CoursSocio", "CoursThéatre"]}
      ]

function listerCoursDisponibles(lstCours)//la fonction sort la liste des cours
    {
      const Cours = ListeCours.map(el => el.description);
      return Cours;
      
    }

function listerEtudiantsInscrits(lstEtudiants)//La fonction sort la liste des étudiants
    {
      const Etudiants = ListeEtudiant.map(el =>  (el.nom) +" "+ (el.prenom));
      return Etudiants;
    }
  
function listerCoursEtudiant(etudiant)// la fonction sort la liste des cours suivi par l'étudiant en fonction du numDA
    { 
      
      const id = ListeEtudiant.find(DA => DA.numDA == etudiant)
      
      return id['ListCourtInscrit'] 
      
    }

function AnnulerCours(etudiant, cours, lstCours, lstEtudiants)//Enlève le court de l'étudiant
{
  
                  const name = ListeEtudiant.find(na => na.nom == etudiant)//recherche le nom de l'étudiant
                  const courinscrit = "ListCourtInscrit"    //Liste des cours qu'il suit
                  const co = name[courinscrit].find(TR => TR == cours)//vérification s'il suit le cours demandé
                  
                  console.log(name)

                  if (co != cours )// Erreur 
                  {
                    
                     console.log("Erreur, l'éléve n'est pas inscrit a ce cours!") 
                  }
                  else  
                  {
                    const name = ListeEtudiant.find(na => na.nom == etudiant)
                    const courinscrit = "ListCourtInscrit"
                    const ind = name[courinscrit].indexOf(cours) //cherche l'index du cours à enlever
                    const co = name[courinscrit].splice(ind,1) // enlève le cours
                    console.log(name)
                    return console.log("L'étudiant a bien été désinscrit du cours : " + cours )
                    
                  }
                  
}

function AjouterCours(lstCours, cours)//ajoute un cours à la liste de cours
  {
    
     const Ajcours = ListeCours.push({sigle: 'CoursSport', description: 'Sport', NbrInscription: 1, NbrMaxInscription: 3})
     
    return Ajcours
    
  }

function AjouterEtudiant(lstEtudiants, etudiant)//ajoute un étudiant à la liste des étudiants inscrit
  {
    const Ajetudiant = ListeEtudiant.push({numDA : 6, nom : "Pourre", prenom : "Pierre", programme : "programmation Web", ListCourtInscrit : ['CoursJS', 'CoursHTML', 'CoursCSS', "Sport"]})
     
    return Ajetudiant
  }
    

function TrouverEtudiant(etudiant,lstEtudiants)// retourne true si l'étudiant est bien dans la liste
{
    const id = ListeEtudiant.find(DA => DA.nom == etudiant)
    if (id == undefined)
      {
        
        return false
      }
    else 
    {
        const nom = id.nom
        if ( nom == etudiant)
        {
          return true
        } 
     } 
}

function Inscription(etudiant, cours) // inscription d'un nouveau cours
{
              
              if (TrouverEtudiant(etudiant) == true)  // vérifie si le Nom existe
                
                {
                  const name = ListeEtudiant.find(na => na.nom == etudiant)
                  const courinscrit = "ListCourtInscrit"
                  const co = name[courinscrit].find(TR => TR == cours)
                  
                  console.log(name)

                  if (co == cours ) // vérifie si l'élève est déja inscrit au cours
                  {
                    
                    return console.log("Erreur, l'éléve est déja inscrit a ce cours!") 
                  }
                  else
                  {
                    const name = ListeEtudiant.find(na => na.nom == etudiant)
                    const courinscrit = "ListCourtInscrit"
                    name[courinscrit].forEach((element, index) =>  (ind = index) ) //cherche l'index max du tableau ListCourtInscrit de l'étudiant
                    
                      if(ind >= 4)
                      {
                        console.log("Erreur, l'élève est déja inscrit à 5 cours")
                      }
                      else
                      {
                        const co = name[courinscrit].push(cours)//inscription du nouveau cours
                        console.log(name)
                        console.log("L'étudiant a bien été inscrit au cours : " + cours )
                      }
                  }
                  
                }
              else
                {
                  console.log("erreur, l'étudiant n'existe  pas")//erreur
                  
                  console.log(listerEtudiantsInscrits());
                  
                  console.log("Veuillez ajouter un etudiant : NumDa, Nom, Prénom, Programme et Cours inscrits")
                    AjouterEtudiant()
                    console.log(listerEtudiantsInscrits());
                }
                  
  }
function MenuPrincipal()
{
console.log("1- Afficher la liste des cours disponibles");
console.log("2- Afficher la liste des étudiants inscrits au cégep");
console.log("3- Afficher la liste des cours d'un étudiant trouvé par son numDA");
console.log("4- Inscrire un étudiant à un cours");
console.log("5- Annuler inscription d'un cours d'un étudiant");

}

function DeroulementProgramme(choix)
{   
    
    MenuPrincipal()
    switch(choix)
        {
         case 1 : 
                console.log(listerCoursDisponibles());
                break;
        
         case 2 : 
                console.log(listerEtudiantsInscrits());
                break;

         case 3 :
                console.log("Entrez un numDA")
                console.log(listerCoursEtudiant(2))//entré teste 
                break;
         
         case 4 :
                console.log("Entrez le nom de l'étudiant que vous voulez inscrire ainsi que le court")
                Inscription("Dupond","CoursCSS" )//entré teste
                
                break;
        
         case 5 :
                console.log("Entrez le nom de l'étudiant que vous voulez désinscrire ainsi que le court")
                AnnulerCours("Karta", "CoursCSS");//entré teste
                break;
        }
}

DeroulementProgramme(1)//entré teste