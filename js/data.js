class Manga
    {

        Chapters = new Array();

        constructor(id, name, description, author, genre, status, cover, datePublished)
        {
            this.Id = id;
            this.Name = name;
            this.Description = description;
            this.Author = author;
            this.Genre = genre;
            this.Status = status;
            this.Cover = cover;
            this.DatePublished = datePublished;
        }

        addChapter (chapter) 
        {
            this.Chapters.push(chapter);
            
        }
    }   
    
    class Chapter
    {

        Pages = new Array();

        constructor (id, name, number, datePublished)
        {
            this.Id = id;
            this.Name = name;
            this.Number = number;
            this.DatePublished = datePublished;
        }

        addPages (page)
        {
            this.Pages.push(page);
        }
    }

    class Page
    {
        constructor(id, index, source) 
        {
            this.Id = id;
            this.Index = index;
            this.Source = source;            
        }
    }

    class Author 
    {
        constructor(id, name, lastName)
        {
            this.Id = id;
            this.Name = name;
            this.LastName = lastName;
        }
    }

    class Status 
    {
        constructor(id, name)
        {
            this.Id = id;
            this.Name = name;
        }
    }

    class Genre  
    {
        constructor (id, name, description)
        {
            this.Id = id;
            this.Name = name;
            this.Description = description;
        }
    }

    const Authors = new Array(new Author(0,"Juan","Carlos"), new Author (1,"Kunkka","Capn"), new Author (2,"Pablo","Redglass"));

    const Genres = new Array(new Genre(0,"Accion","Gente pegandose pero muy fuerte"), new Genre (1,"Horror", "Booo spooky"));

    const Statuses = new Array(new Status(0,"Finalizado"), new Status (1,"En progreso"), new Status (2,"En Hiatus"));

    const Mangas = new Array(
        new Manga(
            0, 
            "Kengan Ashura",
            "Tokita Ohma es un señor con mucha fuerza y se pega con gente que puede tirar un bondi a piñas en un torneo clandestino donde panavox apuesta oficinas contra sony para ver quien le pega mas fuerte a quien", 
            Authors[0],
            Genres[0],
            Statuses[1],
            "../img/kenganasura.jpg",
            new Date()
        ),
        new Manga(
            1,
            "Uzumaki",
            "En una ciudad tranquila la gente empieza a ver espirales en todas las cosas y de repente aparece lovecraft y termina el cuento el y se va todo al garete",
            Authors[1],
            Genres[1],
            Statuses[2],
            "../img/uzumaki.jpg",
            new Date()
        ),
        new Manga(
            2,
            "Jujutsu kaisen",
            "El opening ta bueno",
            Authors[1],
            Genres[1],
            Statuses[1],
            "../img/jujutsu.png",
            new Date()
        ),
        new Manga(
            3,
            "Solo Leveling",
            "Re solo y super leveling",
            Authors[2],
            Genres[1],
            Statuses[1],
            "../img/sololeveling.jpg",
            new Date()
        ), 
        new Manga(
            4,
            "Chainsawman",
            "Re chainsaw y super man",
            Authors[0],
            Genres[2],
            Statuses[2],
            "../img/csm.png",
            new Date()
        ),              
    );

    const Chapters = new Array (
        new Chapter(0,"Empieza el torneo",1,new Date()), 
        new Chapter(1,"El espiral maligno",1,new Date()),
        new Chapter(3,"Maldiciones",1,new Date()),
        new Chapter(4,"Señores gordos",1,new Date()),
        new Chapter(4,"Motosierras",1,new Date())
        );

    Mangas[0].addChapter(Chapters[0]);
    Mangas[1].addChapter(Chapters[1]);
    Mangas[2].addChapter(Chapters[2]);
    Mangas[3].addChapter(Chapters[3]);
    Mangas[4].addChapter(Chapters[4]);

    export {Mangas};