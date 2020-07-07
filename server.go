package main

import (
	"fmt"
	"strconv"
  	// "encoding/json"
    // "net/http"
  "github.com/gin-gonic/gin"
  "github.com/gin-contrib/cors"
)


type User struct {
  ID string `json:"id"`
  Name string `json:"name"`
  Email string `json:"email"`
}

var users []User

func GetSampleText(c *gin.Context) {
  c.JSON(200, "サーバーからのテキストになります。")
}

func GetUsers(c *gin.Context) {  
  
  users = append(users, User{ID: "1", Name: "Yama", Email:"yama@gmail.com"})
  users = append(users, User{ID: "2", Name: "Tanaka", Email:"tanaka@gmail.com"})
  
  c.JSON(200, users)
}

func main() {
	port := 3000;

  fmt.Printf("Server start at %d\n", port)
    
  router := gin.Default()
  
  // Cors対応
  router.Use(cors.New(cors.Config{
    // 許可したいHTTPメソッドの一覧
    AllowMethods: []string{
        "POST",
        "GET",
        "OPTIONS",
        "PUT",
        "DELETE",
    },

    // 許可したいアクセス元の一覧
    AllowOrigins: []string{
        "http://localhost:3001",
    },
  }))
  
  router.GET("/api/sample-text", GetSampleText)
  router.GET("/api/users", GetUsers)
  router.Run(":" +  strconv.Itoa(port))
}