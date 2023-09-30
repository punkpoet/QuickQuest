using System;
using System.Collections.Generic;

namespace QuickQuestAPI.Models;

public partial class OrderStatus
{
    public int OrderStatusId { get; set; }

    public string StatusName { get; set; } = null!;

    public string? Description { get; set; }

    public DateTime CreatedAt { get; set; }

    public DateTime UpdatedAt { get; set; }
}
