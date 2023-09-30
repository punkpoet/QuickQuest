﻿using System;
using System.Collections.Generic;

namespace QuickQuestAPI.Models;

public partial class Banner
{
    public int BannerId { get; set; }

    public string? ImageUrl { get; set; }

    public string? Title { get; set; }

    public string? Description { get; set; }

    public DateTime? CreatedAt { get; set; }

    public DateTime? UpdatedAt { get; set; }
}
