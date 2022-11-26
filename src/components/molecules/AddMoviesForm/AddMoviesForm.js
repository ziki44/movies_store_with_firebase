import React from "react";
import Input from "../../atoms/Input/Input.js";
import Button from "../../atoms/Button/Button.js";

const AddMoviesForm = ({handleInputChange, handleSubmit, title, description, year, poster}) => {



    return (
        <form onSubmit={handleSubmit}>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <p>Title:</p>
                        </td>
                        <td>
                            <Input type="text" name="title" value={title} handleInputChange={handleInputChange}></Input>                        
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Description:</p>
                        </td>
                        <td>
                            <Input type="text" name="description" value={description} handleInputChange={handleInputChange}></Input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Year:</p>
                        </td>

                        <td>
                            <Input type="text" name="year" value={year} handleInputChange={handleInputChange}></Input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Poster:</p>
                        </td>

                        <td>
                            <Input type="text" name="poster" value={poster} handleInputChange={handleInputChange}></Input>
                        </td>
                    </tr>
                </tbody>
            </table>
            <Button type="submit">Insert</Button>
        </form>
    )
}

export default AddMoviesForm;