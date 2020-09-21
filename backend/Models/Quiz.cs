namespace backend.Models
{
    public class Quiz
    {
        //Modellerde Id olmasi gerekiyor ki Entity Framework onu Primary Key olarak kabul etsin.
        public int Id { get; set; }
        public string Title { get; set; }
    }
}
