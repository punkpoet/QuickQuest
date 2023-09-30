using System;
using System.Collections.Generic;

namespace QuickQuestAPI.Models;

public partial class CartItem
{
    public int CartItemId { get; set; }

    public int? CartId { get; set; }

    public int? CourseId { get; set; }

    public int? Quantity { get; set; }

    public DateTime? CreatedAt { get; set; }

    public DateTime? UpdatedAt { get; set; }

    public virtual Cart? Cart { get; set; }

    public virtual Course? Course { get; set; }
}
