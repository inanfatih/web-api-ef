using backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class QuestionsController : ControllerBase
    {
        readonly QuizContext context;

        public QuestionsController(QuizContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public IEnumerable<Question> Get()
        {
            return context.Questions;
        }

        [HttpGet("{quizId}")]
        public IEnumerable<Question> Get([FromRoute] int quizId)
        {
            return context.Questions.Where(q => q.QuizId == quizId);
        }
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Question question)
        {
            var quiz = context.Quiz.SingleOrDefault(q => q.Id == question.QuizId);
            if (quiz == null)
            {
                return NotFound("QuizId does not exist");
            }
            context.Questions.Add(question);
            await context.SaveChangesAsync();
            return Ok(question);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] Question questionData)
        {
            if (id != questionData.Id)
            {
                return BadRequest();
            }
            //var question = await context.Questions.SingleOrDefaultAsync(q => q.Id == id);

            context.Entry(questionData).State = EntityState.Modified;
            await context.SaveChangesAsync();
            return Ok(questionData);
        }
    }
}
