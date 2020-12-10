import React from 'react';
import { useState } from 'react';
import styles from './AddRecipe.module.css';
import { Link, Redirect } from "react-router-dom";

const AddRecipe = (props) => {
    const [submittedForm, setSubmittedForm] = useState();
    function onSubmit(e) {
        e.preventDefault();
        const data = new FormData(e.target);
        setSubmittedForm(data);
    };

    return (
      <div className={styles.container}>
          {submittedForm ? (
            <div className={styles.addedRecipe}>
              <h1>Added new recipe</h1>
              <div>Title: {submittedForm.get("title")}</div>
              <div>Author: {props.username}</div>
              <div>Creation Date: {submittedForm.get("creationDate")}</div>
              <div>Category: {submittedForm.get("category")}</div>
              <div>Difficulty: {submittedForm.get("difficulty")}</div>
              <div>Preparation Time: {submittedForm.get("preparationTime")}</div>
              <div>Cost: {document.getElementById("cheap") && document.getElementById("cheap").checked ? "$" : 
                         (document.getElementById("affordable") && document.getElementById("affordable").checked ? "$$" :
                         (document.getElementById("expensive") && document.getElementById("expensive").checked ? "$$$" : "N/A"))
                }</div>
              <div>Vegetarian: {submittedForm.get("vegetarian") ? "Yes" : "No"}</div>
              <div>Ingredients: {submittedForm.get("ingredients")}</div>
              <div>Utensils: {submittedForm.get("utensils")}</div>
              <div>Instructions: {submittedForm.get("instructions")}</div>
              <Link to="/" className={styles.link}>Okay</Link>
            </div>
          ) : (
            <div className={styles.addPanel}>
            <div className={styles.toAdd}>
              <h1>Add a new recipe</h1>
              <form onSubmit={onSubmit} className={styles.form}>
                <div className={styles.title}>
                  <label htmlFor="title">Title*</label>
                  <input type="text" name="title" id="title" required/>
                </div>
                <div className={styles.creationDate}>
                  <label htmlFor="title">Creation Date</label>
                  <input type="date" name="creationDate" id="creationDate" size="10"/>
                </div>
                <div className={styles.category}>
                  <label htmlFor="category">Category</label>
                  <select name="category" id="category">
                    <option value="American">American</option>
                    <option value="Chinese">Chinese</option>
                    <option value="Japanese">Japanese</option>
                    <option value="Korean">Korean</option>
                    <option value="Mexican">Mexican</option>
                    <option value="Thai">Thai</option>
                    <option value="Vietnamese">Vietnamese</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className={styles.difficulty}>
                  <label htmlFor="difficulty">Difficulty</label>
                  <select name="difficulty" id="difficulty">
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Expert">Expert</option>
                  </select>
                </div>
                <div className={styles.preparationTime}>
                  <label htmlFor="preparationTime">Preparation Time (Minutes)</label>
                  <input type="number" name="preparationTime" id="preparationTime"/>
                </div>
                <div className={styles.cost}>
                  <label htmlFor="cost">Cost</label>
                  <input type="radio" name="cost" id="cheap" value="1"/>
                  <label htmlFor="cheap">$</label>
                  <input type="radio" name="cost" id="affordable" value="2"/>
                  <label htmlFor="affordable">$$</label>
                  <input type="radio" name="cost" id="expensive" value="3"/>
                  <label htmlFor="expensive">$$$</label>
                </div>
                <div className={styles.vegetarian}>
                  <input type="checkbox" name="vegetarian" id="vegetarian" value="1"/>
                  <label htmlFor="vegetarian">Vegetarian</label>
                </div>
                <div className={styles.ingredients}>
                  <label htmlFor="ingredients">Ingredients*</label>
                  <input type="text" name="ingredients" id="ingredients" required/>
                </div>
                <div className={styles.utensils}>
                  <label htmlFor="utensils">Utensils</label>
                  <input type="text" name="utensils" id="utensils"/>
                </div>
                <div className={styles.instructions}>
                  <label htmlFor="instructions">Instructions*</label>
                  <textarea name="instructions" id="instructions" required/>
                </div>
                <div className={styles.addButton}>
                  <input type="submit" value="Add" />
                </div>
              </form>
            </div>
            </div>
          )
          }
      </div>
    )
}

export default AddRecipe
