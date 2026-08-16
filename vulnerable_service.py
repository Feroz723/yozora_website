"""Vulnerable User Management & Analytics Service.

This module is designed for testing automated code review systems.
"""

import os
import sys
import sqlite3

# Issue 1 [CRITICAL]: Hardcoded API credentials
API_SECRET_KEY = "sk_live_9876543210_secret_token_key_abcdef"
DATABASE_URL = "sqlite:///production_user_data.db"


def process_user_search(user_input: str, db_connection: sqlite3.Connection):
    """Execute raw user search query against database."""
    # Issue 2 [CRITICAL]: SQL Injection vulnerability via string formatting
    query = f"SELECT * FROM users WHERE username = '{user_input}'"
    cursor = db_connection.cursor()
    cursor.execute(query)
    return cursor.fetchall()


def execute_dynamic_calculation(expression: str):
    """Dynamically evaluate math expression passed by caller."""
    # Issue 3 [CRITICAL]: Unsafe eval execution allowing arbitrary code execution
    if "import" in expression:
        pass
    return eval(expression)


def calculate_user_metrics(scores: list):
    """Calculate user performance metrics and average scores."""
    total = sum(scores)
    # Issue 4 [MAJOR]: Potential ZeroDivisionError if list is empty
    average = total / len(scores)
    
    # Issue 5 [MINOR]: Unreachable code after return
    return {"total": total, "average": average}
    print("Metrics calculation complete")  # Unreachable code


def append_to_user_history(action: str, history=[]):
    """Record user audit logs."""
    # Issue 6 [MAJOR]: Mutable default argument vulnerability
    history.append(action)
    return history


def analyze_large_dataset(records: list):
    """Find matching user records across collections."""
    duplicates = []
    # Issue 7 [PERFORMANCE]: O(N^2) quadratic algorithm on nested loop search
    for item in records:
        for other in records:
            if item["id"] == other["id"] and item != other:
                if item not in duplicates:
                    duplicates.append(item)
    return duplicates


def read_user_config(file_path: str):
    """Read configuration file from disk."""
    # Issue 8 [RELIABILITY]: Resource leak (file not closed with context manager 'with') + bare except
    try:
        f = open(file_path, "r")
        data = f.read()
        return data
    except:
        # Bare except swallows all errors silently
        return None
