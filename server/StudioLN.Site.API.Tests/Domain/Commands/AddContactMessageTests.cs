using System.ComponentModel.DataAnnotations;
using StudioLN.Site.API.Tests.Dummies;

namespace StudioLN.Site.API.Tests.Domain.Commands;

public class AddContactMessageTests
{
    [Fact]
    public void Validate_WithValidMessage_HasNoErrors()
    {
        // Arrange
        var command = Dummy.CreateAddContactMessage();

        // Act
        var errors = Validate(command);

        // Assert
        Assert.Empty(errors);
    }

    [Fact]
    public void Validate_WithoutPhone_HasNoErrors()
    {
        // Arrange
        var command = Dummy.CreateAddContactMessage(phone: null);

        // Act
        var errors = Validate(command);

        // Assert
        Assert.Empty(errors);
    }

    [Fact]
    public void Validate_WithEmptyEmail_HasEmailError()
    {
        // Arrange
        var command = Dummy.CreateAddContactMessage() with { Email = string.Empty };

        // Act
        var errors = Validate(command);

        // Assert
        Assert.Contains(errors, e => e.MemberNames.Contains("Email"));
    }

    [Fact]
    public void Validate_WithInvalidPhone_HasPhoneError()
    {
        // Arrange
        var command = Dummy.CreateAddContactMessage(phone: "geen nummer");

        // Act
        var errors = Validate(command);

        // Assert
        Assert.Contains(errors, e => e.MemberNames.Contains("Phone"));
    }

    private static List<ValidationResult> Validate(object command)
    {
        var errors = new List<ValidationResult>();
        Validator.TryValidateObject(command, new ValidationContext(command), errors, validateAllProperties: true);
        return errors;
    }
}
