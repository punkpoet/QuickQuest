using System;
using System.Collections.Generic;

namespace QuickQuestAPI.Models;

public partial class WishlistItem
{
    public int WishlistItemId { get; set; }

    public int? WishlistId { get; set; }

    public int? CourseId { get; set; }

    public DateTime? CreatedAt { get; set; }

    public DateTime? UpdatedAt { get; set; }

    public virtual Course? Course { get; set; }

    public virtual Wishlist? Wishlist { get; set; }
}
