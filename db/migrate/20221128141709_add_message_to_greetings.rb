class AddMessageToGreetings < ActiveRecord::Migration[7.0]
  def change
    add_column :greetings, :message, :text
  end
end
