using System;
using System.Collections.Generic;

namespace QuickQuestAPI.Models;

public partial class Lesson
{
    public int LessonId { get; set; }

    public int? CourseId { get; set; }

    public string? Title { get; set; }

    public string? VideoUrl { get; set; }

    public decimal? Duration { get; set; }

    public DateTime? CreatedAt { get; set; }

    public DateTime? UpdatedAt { get; set; }

    public virtual Course? Course { get; set; }
}
