using System;
using System.Collections.Generic;

namespace QuickQuestAPI.Models;

public partial class Permission
{
    public int PermissionId { get; set; }

    public string? Name { get; set; }

    public string? Description { get; set; }

    public DateTime? CreatedAt { get; set; }

    public DateTime? UpdatedAt { get; set; }
}
